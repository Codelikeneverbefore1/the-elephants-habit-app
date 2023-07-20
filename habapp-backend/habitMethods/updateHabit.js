const asyncHandler = require('express-async-handler')
const Habit = require() //link to input/list required

// desc. update habit
// route
const updateHabit = asyncHandler(async (req,res) => {
    const habit = await Goal.findById(req.params.id)
    if(!habit) {
        res.status(400)
        throw new Error('Habit not found')
    }
    const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedHabit)
})

module.exports = updateHabit;