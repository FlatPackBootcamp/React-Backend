const Student = require('../models/Student')

const isAdmin = (req, res, next) => {
    if (!req.query.admin_key) {
        res.status(401).json({
            error: 'Admin Key not provided',
            message: 'Only admins need to call this API, maybe you are looking for the /pizza endpoint?'
        })
    }
    if (req.query.admin_key !== process.env.ADMIN_KEY) {
        res.status(401).json({
            error: 'Incorrect Admin Key',
            message: 'Contact a Flatpack administrator for an admin key if you need it'
        })
    }
    next()
}

const mustBeStudent = async (req, res, next) => {
    if (!req.query.student_key) {
        res.status(401).json({
            error: 'Student Key not provided',
            message: 'You need to provide your Student key, this should have been emailed to you, If not get in touch with your tutor. Make sure you add the parameter "student_key="XXXXXX"".'
        })
    }
    const student = await Student.findById(req.query.student_key)
    if (student){
        next()
    } else {
        res.status(401).json({
            error: 'Student Key Incorrect, or Student Does Not Exist',
            message: 'Are you sure you typed your student key correctly? If you are 100% sure, contact your tutor.'
        })
    }
}

module.exports = {
    isAdmin,
    mustBeStudent
}