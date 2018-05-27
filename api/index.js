const express = require('express')
const router = express.Router()

module.exports = router

router.use('/login', require('./login'))
router.use('/student', require('./student'))
router.use('/display', require('./display'))
router.use('/save', require('./insert'))