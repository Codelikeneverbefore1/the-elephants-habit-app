const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//desc: register new user
//route POST /api/users
//access: private
const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error ('Add all fields')
    }
    //check if user exists
    const userExists = await User.findOne({email}) // locate user via passed in email

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10) // generate salt in order to use bcrypt method genSalt
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


    //res.json({message: 'Register User'})
})

//desc: Authenticate new user
//route POST /api/users/login
//access: public
const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body
    
    //check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid email/password')
    }

    res.json({message: 'Login User'})
})

//desc: get user data
//route GET /api/users/me
//access: private
const getMe = asyncHandler(async(req,res) => {
    //res.json({message: 'User Data'})
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })  //jwt.sgn methos takes 2 arguments - 1)payload(id) 2)secret(process.env)
}

module.exports = {
    registerUser,
    loginUser,
    getMe

}