const express = require('express')
const router = express.Router()
const {getHabit,
       createHabit, 
       updateHabit, 
       deleteHabit
    } = require('../controllers/habitController') // can be brought in from controller

router.route('/').get(getHabit).post(createHabit)
router.route('/:id').put(updateHabit).delete(deleteHabit)

module.exports = router