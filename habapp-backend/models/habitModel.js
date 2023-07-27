const mongoose = require('mongoose')

const habitSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,  // resource created by _id: field is ObjectId
        required: true, 
        ref: 'User'
    },
    desc: {
        type: String,
        required: (true, 'Please add desc.')
    }
},{
    timestamps: true,
})
module.exports = mongoose.model('Habit', habitSchema)