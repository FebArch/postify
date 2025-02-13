const {Router} = require("express")

const {
    hangleSignupGetReq, hangleSignupPostReq,
    hangleLoginGetReq, hangleLoginPostReq
} = require('../controllers/auth')

const authRouter = Router()

authRouter.route('/signup').get(hangleSignupGetReq).post(hangleSignupPostReq)

authRouter.route('/login').get(hangleLoginGetReq).post(hangleLoginPostReq)

module.exports = authRouter