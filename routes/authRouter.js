const {Router} = require("express")

const {
    handleSignupGetReq, handleSignupPostReq,
    handleLoginGetReq, handleLoginPostReq,
    logout
} = require('../controllers/auth')

const authRouter = Router()

authRouter.route('/signup').get(handleSignupGetReq).post(handleSignupPostReq)

authRouter.route('/login').get(handleLoginGetReq).post(handleLoginPostReq)
authRouter.route('/logout').get(logout)

module.exports = authRouter