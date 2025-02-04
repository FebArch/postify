const multer = require("multer");
const fs = require("fs");
const path = require("node:path");

const specialCharacters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
    "_", "+", "{", "}", "[", "]", "|", "\\", ":", ";", 
    "'", "\"", "<", ">", ",", ".", "?", "/", "~", "`",
    "=", "¬", "€", "£", "¥", "©", "®", "™", "¶", "°", 
    "•", "⊕", "⊗", "∞", "≠", "≡", "≈", "≤", "≥", "©", "°", 
    "¤", "§", "†", "‡", "÷", "×", "≪", "≫", "♪", "♫"
];



function createDirectoryIfNotExists(req){
    const rootDirPath = path.resolve('../public/')
    console.log("1",rootDirPath)
    let imgDir = req.body.blogTitle
  try {
      
    
    for (char of imgDir) {
        if(specialCharacters.includes(char)){
            imgDir = imgDir.replace(char, '-')
        }
    }

    dirPath = path.join(rootDirPath, imgDir)
    console.log("2",dirPath)

      // Using fs.mkdirSync with recursive option to create all parent directories if they don't exist
      if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
          console.log("created")
          return dirPath
      }
  } catch (err) {
      console.error('Error creating directory:', err);
      throw err;
  }
};

  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

    // const directoryPath = path.join(__dirname, '/public', `${req.body.blogTitle}`)

    let directoryPath = createDirectoryIfNotExists(req)
    console.log(directoryPath)
        cb(null, `${directoryPath}`)
    },
    filename: function (req, file, cb) {
        const fn = `${req.body.blogTitle} - ${Math.floor(Math.random()*1000)}` + path.extname(file.originalname)
        cb(null, fn)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload