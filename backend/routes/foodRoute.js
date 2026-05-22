import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const foodRouter=express.Router();

//Image Storage Engine

const storage =multer.diskStorage({
    destination: path.join(__dirname, '..', 'uploads'),
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }

})

const upload = multer({ storage: storage })

const maybeUpload = (req, res, next) => {
    const contentType = req.headers['content-type'] || ''
    if (contentType.includes('multipart/form-data')) {
        return upload.single('image')(req, res, next)
    }
    next()
}

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)




export default foodRouter;