const { getUser } = require("../utils/authService")

function setUserObjToReq(req, res, next){
    let uid = req.cookies?.uid
    if (!uid) {
        req.user = null;
    }

    let userData = getUser(uid)

    req.user = userData;
    return next()
}

function restrictTo(roles=[]){
    return function (req, res, next){

        if (!req.user) {
            return res.render("login", {authErr: "User not found! Login to continue!"})
        }

        if (!roles.includes(req.user.role)) {
            return res.json({authErr: "Sorry You  are not authorized"})
        }
        return next()
    }
}

module.exports = {
    setUserObjToReq, restrictTo
}