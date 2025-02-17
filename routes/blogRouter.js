const { Router } = require("express")
const upload = require('../utils/multer')
const { restrictTo } = require("../middlewares/auth")

const {
    handleBlogGetReq, handleCreateGetReq, handleCreatePostReq
} = require('../controllers/blog')


const router = Router()

router.route('/').get(handleBlogGetReq)

router.route('/create').get(restrictTo(['user']), handleCreateGetReq).post(upload.single('coverImg') ,handleCreatePostReq)

module.exports = router