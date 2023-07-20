const express = require('express')
const router = express.Router()

router.put('/:id', (req,res) => {        // use put(), set :id 
    res.status(200).json({message: `Update goal ${req.params.id}`}) // use ``instead of '' to include variable, use req, assign param id to it
})

module.exports = router
