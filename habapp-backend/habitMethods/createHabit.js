const asyncHandler = require('express-async-handler')
const Habit = require() //link to input/list required

// desc. create habit
// route
const createHabit = asyncHandler(async (req,res) => {
    if (!req.body.text) {                                  
        res.status(400).json({ message: 'Please add text'}) 
        throw new Error('Please add text field')
    }
    const habit = await Habit.create({
        text: req.body.text
})
    res.status(200).json(habit)
})

module.exports = createHabit;