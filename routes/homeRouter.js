const express = require("express")
const {
    handleAboutGetReq,
    handleHomeGetReq
} = require('../controllers/home')

const router = express.Router()

router.route('/home').get(handleHomeGetReq)
router.route('/about').get(handleAboutGetReq)

module.exports = router