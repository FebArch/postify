const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function hangleSignupGetReq(req, res) {
    return res.render('signup')
}

async function hangleSignupPostReq(req, res) {
    let {username, email, password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        return res.render("signup", {authErr: "Confirmed password incorrect!"})        
    }

}

async function hangleLoginGetReq(req, res) {
    return res.render('login')
    
}

async function hangleLoginPostReq(req, res) {
    
}

module.exports = {
    hangleSignupGetReq, hangleSignupPostReq,
    hangleLoginGetReq, hangleLoginPostReq
}
