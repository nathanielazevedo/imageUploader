const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//cloudinary info
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/photos/upload', async (req, res) => {
        await cloudinary.uploader.upload(req.body.data);
        res.json({ msg: 'Image uploaded successfully' });
});

app.listen(8000, () =>
  console.log(`This is the beginning of the Node File Upload App`)
);
