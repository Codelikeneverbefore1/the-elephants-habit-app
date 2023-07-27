//middleware executes during request/response cycle

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 // if in controller, then use that, else 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // will only show in developer mode, else error stack ( liner nr etc.)
    })
}

module.exports = {
    errorHandler,
} 