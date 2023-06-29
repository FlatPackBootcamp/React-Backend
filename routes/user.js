const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.post('/auth/signup', userCtrl.signup )
router.post('/auth/signin', userCtrl.signin )

module.exports = router