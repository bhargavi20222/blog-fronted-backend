const express = require('express');
const app = express();
const router = express.Router();
const multer = require("multer");
const { promisify } = require('util')
const blogLists = require('../model/crud');
const fs = require('fs');
const unlinkAsync = promisify(fs.unlink)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});


app.use(express.json());
router.post('/createBlog', upload.single("image"), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);

        const dataAdd = blogLists.create({
            title: data.title,
            Description: data.Description,
            type: data.type,
            fileprth: req.file.originalname
        })
        if (dataAdd != undefined) {
            res.send({ responce: "sended" });
        } else {
            res.send({ responce: 0 });
        }
    } catch (error) {
        res.send({ err: error })
        console.log('error::: ', error);
    }
})

router.get('/getAllBlogs', async (req, res) => {
    try {
        const dataAdd = await blogLists.find({});
        return res.send({ dataAdd });
    } catch (error) {
        console.log('error::: ', error);
        return res.send({ err: error })
    }
})

router.post('/GetEditData', async (req, res) => {
    try {
        const bcd = await req.body.my_id
        const getData = await blogLists.findById(bcd);

        return res.send({ datas: getData });
    } catch (error) {
        console.log('error:::', error);
        return res.send({ err: error })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const getBlogData = await blogLists.findById(req.params.id)
        const path = `./public/${getBlogData.fileprth}`
        const del = await unlinkAsync(path)

        const removeblog = await blogLists.findByIdAndRemove(req.params.id);
        return res.send({ message: 'The blogs data was removed' })

    } catch (error) {
        return res.send(error)
    }
})

module.exports = router;