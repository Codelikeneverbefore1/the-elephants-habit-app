const asyncHandler = require('express-async-handler')
const Habit = require() //link to input/list required

// desc. delete habit
// route
const deleteHabit = asyncHandler(async (req,res) => {
    const habit = await Habit.findById(req.params.id)
    
    if(!habit) {
        res.status(400)
        throw new Error('Habit not found')
    }
    //console.log(goal)
    const habit2 =     await Habit.deleteOne({ _id: req.params.id })
    console.log(habit2)
    
    res.status(200).json({ id: req.params.id })
})

module.exports = deleteHabit;