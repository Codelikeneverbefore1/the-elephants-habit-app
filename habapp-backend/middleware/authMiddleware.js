const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req,res,next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header, req header, split into 0,1, get array item 1
            token = req.headers.authorization.split(' ')[1]
            
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await User.findById(decoded.id).select('-password') // <- will take out password
            
            next()
        
        }catch (error) {
            console.log(error)
            res.status(401) //Error(message?: string): Error
            throw new Error('Not authorized')

        }       
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {protect}