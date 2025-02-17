const {getUser} = require('../utils/authService')

async function handleHomeGetReq(req, res){
    return res.render('home', {userData: req.user})
}

async function handleAboutGetReq(req, res) {
    return res.render('about')
}


module.exports = {
    handleHomeGetReq,
    handleAboutGetReq
}