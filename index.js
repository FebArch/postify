const express = require("express");
const path = require("path");
const blogRoute = require("./routes/blogRouter");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use('/blogs', blogRoute)


app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)
})

// The Lamborghini Legacy/The Lamborghini Legacy - 416.jpg

// /The Lamborghini Legacy/nfs.jpg