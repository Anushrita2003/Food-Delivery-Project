import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter=express.Router();

//Image Storage Engine

const storage =multer.diskStorage({
    destination:"uploads",
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

foodRouter.post("/add", maybeUpload, addFood)
foodRouter.get("/list", listFood)
foodRouter.get("/remove", removeFood)




export default foodRouter;