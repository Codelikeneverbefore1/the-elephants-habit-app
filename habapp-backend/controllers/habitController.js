// when using mongoose in each function to interact with database will give back a promise

const asyncHandler = require('express-async-handler')
const Habit = require('../models/habitModel')
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
    if (!req.body.text) {                                   //if not req body.text, if unticked in postman body
        res.status(400).json({ message: 'Please add text'}) //res error 400, when unticked, gives message
        throw new Error('Please add text field')
    }
    const habit = await Habit.create({
        text: req.body.text
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
    //console.log(habit)
    const habit2 =     await Habit.deleteOne({ _id: req.params.id })
    console.log(habit2)

    //await Habit.deleteOne({ id: req.params.id })
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getHabit,
    createHabit,
    updateHabit,
    deleteHabit,
}