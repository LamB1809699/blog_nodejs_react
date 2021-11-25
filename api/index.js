// Require essentials stuffs
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Require routes
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')

// Config stuffs
dotenv.config();                //for env file
app.use(express.json());        //allow to send json file
app.use("/images", express.static(path.join(__dirname, "/images"))); //allow to get images path

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true, }).then(console.log('Connected to MongoDB!')).catch(err => console.log(err))

// Upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb (null, 'images') }, 
    filename: (req, file, cb) => { cb (null, req.body.name) }
});
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded!')
})

// Using routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

// Run at port with link
app.listen('5000', () => {console.log('Running on http://localhost:5000')})