const mongoose = require('mongoose')

const habitSchema = mongoose.Schema({
    text: {
        type: String,
        required: (true, 'Please add text')
    }
},{
    timestamps: true,
})
module.exports = mongoose.model('Habit', habitSchema)