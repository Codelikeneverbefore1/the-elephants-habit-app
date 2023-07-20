const asyncHandler = require('express-async-handler')
const Habit = require() //link to input/list required

// desc. get habit
// route
const getHabit = asyncHandler(async (req,res) => {
    const habits = await Habit.find()
    res.status(200).json(habits)
})

module.exports = getHabit;
