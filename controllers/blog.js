const { currentDate } = require('../utils/currentDate')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const path = require('path')


let blogData, commentData

async function handleBlogGetReq(req, res) {
    blogData = await prisma.blog.findMany({})
    return res.render('blogs', { blogData, userData: req.user })
}

// This following function(s) is only accessible to the authenticated user
async function handleCreateGetReq(req, res) {
    return res.render('create', { userData: req.user })
}

async function handleCreatePostReq(req, res) {
    const { blogTitle, coverImg, blogBody } = req.body


    try {
        blogData = await prisma.blog.create({
            data: {
                blogTitle, blogBody,
                coverImg,
                createAt: currentDate(),
                author_id: req.user.user_id
            }
        });
    } catch (error) {
        console.log("Error while posting your blog", error)
    }

    return res.redirect('/blogs')
}


async function handleGetABlogReq(req, res) {
    let blog_id = parseInt(req.params.blogId);
    
    try {
        blogData = await prisma.blog.findUnique({
            where: {
                blog_id
            }
        })
    } catch (error) {
        console.log("Error fetching blog", blog_id, error)
    }

    try {
        commentData = await prisma.comments.findMany({
            where:{
                blogId: blog_id
            }
        })
    } catch (error) {
        console.log("sorry could not load commnets for this blog", error)
    }
    return res.render("blog", { blogData, commentData, userData: req.user })

}


async function handlePostACommentReq(req, res) {
    let { commentBody } = req.body
    let userData = req.user

    try {
        commentData = await prisma.comments.create({
            data: {
                blogId: parseInt(req.params.blogId),
                authorName: userData.user_name,
                authorProfileImg: userData.profileImg,
                commentBody
            }
        })
    } catch (error) {
        console.log("sorry we didn't able to post your comment", error)
    }
    // console.log(commentData)
    return res.redirect(`/blogs/${commentData.blogId}`)
}


module.exports = {
    handleBlogGetReq,
    handleCreateGetReq, handleCreatePostReq,
    handleGetABlogReq,
    handlePostACommentReq
}