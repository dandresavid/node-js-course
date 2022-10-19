    const multer = require('multer')

    const avatar = multer({
        limits: {
            fileSize: 1000000
        },
        fileFilter(req, file, cb) {
            if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
                return cb(new Error('Please provide a .jpg, jpeg or png image'))
            }
             cb(undefined,true)

        }
    })

    module.exports = avatar