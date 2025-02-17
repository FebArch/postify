const {currentDate} = require('../utils/currentDate')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const path = require('path')



async function handleBlogGetReq(req, res) {
    let blogData = await prisma.blog.findMany({})
    return res.render('blogs', {blogData, userData: req.user})
}

// This following function(s) is only accessible to the authenticated user
async function handleCreateGetReq(req, res) {
    return res.render('create', {userData: req.user})
}

async function handleCreatePostReq(req, res) {
    const {blogTitle, coverImg, blogBody} = req.body

    console.log(req.file)
    // console.log(`/${blogTitle}/${req.file.filename + path.extname(file.filename)}`)
    let blogData = await prisma.blog.create({
        data:{
            blogTitle, blogBody,
            coverImg,
            createAt: currentDate(),
            author_id: req.user.user_id
        }
    });

    return res.redirect('/blogs')
}


async function handleGetABlogReq(req, res) {
    let blog_id = parseInt(req.params.blogId)

    let blogData = await prisma.blog.findUnique({
        where:{
            blog_id
        }
    })

    return res.json({blogData})
}

module.exports = {
    handleBlogGetReq,
    handleCreateGetReq, handleCreatePostReq,
    handleGetABlogReq
}