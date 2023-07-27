const express = require('express')
const router = express.Router()
const {getHabit,
       createHabit, 
       updateHabit, 
       deleteHabit
    } = require('../controllers/habitController') // can be brought in from controller

const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getHabit).post(protect, createHabit)
router.route('/:id').put(protect, updateHabit).delete(protect, deleteHabit)

module.exports = router