const express = require("express")
const {
    handleAboutGetReq,
    handleHomeGetReq
} = require('../controllers/home')

const router = express.Router()

router.route('/').get(async (req, res)=>res.redirect('/home'))
router.route('/home').get(handleHomeGetReq)
router.route('/about').get(handleAboutGetReq)

module.exports = router