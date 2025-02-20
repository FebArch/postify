const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")

const { setUserObjToReq } = require('./middlewares/auth')

const blogRoute = require("./routes/blogRouter");
const homeRoute = require('./routes/homeRouter');
const authRoute = require('./routes/authRouter');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares...
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(setUserObjToReq)  // Checking for authentication


// EJS setup
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


// Routes...
app.use('/', homeRoute)
app.use('/api', authRoute)
app.use('/blogs', blogRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})