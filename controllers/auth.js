
async function hangleSignupGetReq(req, res) {
    return res.render('signup')
}

async function hangleSignupPostReq(req, res) {
    
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