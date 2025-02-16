const {Router} = require("express")

const {
    handleSignupGetReq, handleSignupPostReq,
    handleLoginGetReq, handleLoginPostReq
} = require('../controllers/auth')

const authRouter = Router()

authRouter.route('/signup').get(handleSignupGetReq).post(handleSignupPostReq)

authRouter.route('/login').get(handleLoginGetReq).post(handleLoginPostReq)

module.exports = authRouter