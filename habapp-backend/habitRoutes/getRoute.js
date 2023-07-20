const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {        // to link to http://localhost:5000/api/habits
    res.status(200).json({message: 'Get habits'})
})                                    

module.exports = router
