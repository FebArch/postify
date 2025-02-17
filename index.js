const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")

const blogRoute = require("./routes/blogRouter");
const homeRoute = require('./routes/homeRouter');
const authRoute = require('./routes/authRouter');


const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use('/', homeRoute)
app.use('/api', authRoute)
app.use('/blogs', blogRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})

// The Lamborghini Legacy/The Lamborghini Legacy - 416.jpg

// /The Lamborghini Legacy/nfs.jpg