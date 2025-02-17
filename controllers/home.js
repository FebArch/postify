const {getUser} = require('../utils/authService')

async function handleHomeGetReq(req, res){

    let uid = req.cookies?.uid;
    
    if (uid) {
        let userData = getUser(uid);
        return res.render('home', {userData})
    }
        
    return res.render('home')
}

async function handleAboutGetReq(req, res) {
    return res.render('about')
}


module.exports = {
    handleHomeGetReq,
    handleAboutGetReq
}