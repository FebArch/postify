const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")

const {setUser} = require('../utils/authService')

async function handleSignupGetReq(req, res) {
    return res.render('signup')
}

async function handleSignupPostReq(req, res) {
    let {username, email, password, confirmPassword, gender} = req.body;
    let admin = req.body?.admin
    if(admin){
        console.log('>>', admin)
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
            user_name: username,
            email,
            password: hashPassword,
            gender,
            profileImg
        }
    });

    setUser(res, userData);
    
    return res.render('home', {userData})

}

async function handleLoginGetReq(req, res) {
    return res.render('login')
    
}

async function handleLoginPostReq(req, res) {
    
}

module.exports = {
    handleSignupGetReq, handleSignupPostReq,
    handleLoginGetReq, handleLoginPostReq
}
