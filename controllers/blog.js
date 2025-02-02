const {currentDate} = require('../utils/currentDate')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const path = require('path')



async function handleBlogGetReq(req, res) {
    let blogData = await prisma.blog.findMany({})
    return res.render('blogs', {blogData})
}






async function handleCreateGetReq(req, res) {
    return res.render('create')
}

async function handleCreatePostReq(req, res) {
    const {blogTitle, blogBody} = req.body

    console.log(req.file)
    // console.log(`/${blogTitle}/${req.file.filename + path.extname(file.filename)}`)
    let blogData = await prisma.blog.create({
        data:{
            blogTitle, blogBody,
            coverImg: `/${blogTitle}/${req.file.filename}`,
            createAt: currentDate()
        }
    });

    return res.redirect('/blogs')
}

module.exports = {
    handleBlogGetReq,
    handleCreateGetReq, handleCreatePostReq
}