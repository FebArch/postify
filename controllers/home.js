
async function handleHomeGetReq(req, res){
    return res.render('home')
}

async function handleAboutGetReq(req, res) {
    return res.render('about')
}


module.exports = {
    handleHomeGetReq,
    handleAboutGetReq
}