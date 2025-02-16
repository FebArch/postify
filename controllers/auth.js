const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")

const {setUser} = require('../utils/authService')

async function handleSignupGetReq(req, res) {
    return res.render('signup')
}

async function handleSignupPostReq(req, res) {
    let {username, email, password, confirmPassword, gender} = req.body;
    let role = 'user'

    if (req.body.admin) {
        role = 'admin'
    }

    if (password !== confirmPassword) {
        return res.render("signup", {authErr: "Confirmed password incorrect!"})        
    }

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    gender == 'male' ? profileImg = boyProfilePic : profileImg = girlProfilePic

    let hashPassword = await bcrypt.hash(password, 10)

    let userData = await prisma.user.create({
        data:{
            username,
            email,
            password: hashPassword,
            gender,
            profileImg,
            role
        }
    });

    setUser(res, userData);
    
    return res.render('home', {userData})

}

async function handleLoginGetReq(req, res) {
    return res.render('login')
    
}

async function handleLoginPostReq(req, res) {
    let {username, password} = req.body;
    console.log(username);
    let userData = await prisma.user.findUnique({
        where:{
            username
        }
    });
    // console.log()
    return res.json({userData})
}

module.exports = {
    handleSignupGetReq, handleSignupPostReq,
    handleLoginGetReq, handleLoginPostReq
}
