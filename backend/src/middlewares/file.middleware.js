const multer = require("multer")


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 3 * 1024 * 1024
    },
    fileFilter: (req, file, callback) => {
        const isPdf = file.mimetype === "application/pdf" || /\.pdf$/i.test(file.originalname)

        if (!isPdf) {
            return callback(new Error("Only PDF resume files are supported."))
        }

        callback(null, true)
    }
})


module.exports = upload