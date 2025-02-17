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

module.exports = {
    setUserObjToReq
}