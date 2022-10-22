const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    allowed_formats: ['jpg', 'png'],
    folder: 'xan-campos-web',
  },
});
 
const parser = multer({ storage: storage });

module.exports = parser;