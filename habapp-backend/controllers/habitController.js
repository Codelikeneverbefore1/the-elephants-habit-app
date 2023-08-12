const asyncHandler = require('express-async-handler')
const Habit = require('../models/habitModel')
const User = require('../models/userModel')

// desc. Get habits
// route GET/api/habits
// access Private
const getHabit = asyncHandler(async (req,res) => {
    const habits = await Habit.find()                      
    
    res.status(200).json(habits)
})

// desc. Create habit
// route POST/api/habits
// access Private
const createHabit = asyncHandler(async (req,res) => {
    if (!req.body.title) {                                   
        res.status(400).json({ message: 'Please add title'})
        throw new Error('Please add text field')
    }
    const habit = await Habit.create({
        title: req.body.title,
        desc: req.body.desc
})
    res.status(200).json(habit)
})

// desc. Update habit
// route PUT/api/habits/:id
// access Private
const updateHabit = asyncHandler(async (req,res) => {
    const habit = await Habit.findById(req.params.id)
    if(!habit) {
        res.status(400)
        throw new Error('Habit not found')
    }

    const user = await User.findById(req.user.id)
   
    if(!user){
        res.status(401)
        throw new Error ('User not found')
    }

    if(goal.user.toString() !== user.id) { 
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedHabit)
})

// desc. Delete habit
// route DELETE/api/habits/:id
// access Private
const deleteHabit = asyncHandler(async (req,res) => {
    const habit = await Habit.findById(req.params.id)
    
    if(!habit) {
        res.status(400)
        throw new Error('Habit not found')
    }

    const user = await User.findById(req.user.id)
    //check for user
    if(!user){
        res.status(401)
        throw new Error ('User not found')
    }

    if(goal.user.toString() !== user.id) { 
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const habit2 =     await Habit.deleteOne({ _id: req.params.id })
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getHabit,
    createHabit,
    updateHabit,
    deleteHabit,
}