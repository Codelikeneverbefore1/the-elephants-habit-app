const express = require('express')
const router = express.Router()

router.delete('/:id', (req,res) => {     
    res.status(200).json({message: `Delete habit ${req.params.id}`}) // 
})

module.exports = router
