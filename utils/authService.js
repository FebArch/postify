const jwt = require("jsonwebtoken")
require('dotenv').config();

function setUser(res, userObj){
    let jwtToken = jwt.sign(
        {
            user_id: userObj.user_id,
            user_name: userObj.username,
            gender: userObj.gender,
            profileImg: userObj.profileImg,
            role: userObj.role
        }, process.env.jwtSecretKey
    );
    res.cookie('uid', jwtToken);
    return
}

function getUser(jwtToken){
    return jwt.verify(jwtToken, process.env.jwtSecretKey)
}

module.exports = {
    setUser,
    getUser
}