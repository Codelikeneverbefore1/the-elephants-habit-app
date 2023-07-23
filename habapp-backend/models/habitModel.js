const mongoose = require('mongoose')

const habitSchema = mongoose.Schema({
    title: {
        type: String,
        required: (true, 'Please add title')
    },
    desc: {
        type: String,
        required: (true, 'Please add desc.')
    }
},{
    timestamps: true,
})
module.exports = mongoose.model('Habit', habitSchema)