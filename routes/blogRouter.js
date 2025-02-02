const { Router } = require("express")

const {
    handleBlogGetReq, handleCreateGetReq, handleCreatePostReq
} = require('../controllers/blog')

const upload = require('../utils/multer')

const router = Router()


router.route('/').get(handleBlogGetReq)

router.route('/create').get(handleCreateGetReq).post(upload.single('coverImg') ,handleCreatePostReq)

module.exports = router