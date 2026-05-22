import foodModel from "../models/foodModel.js";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


//add food items

const addFood = async (req, res) => {
    let image_filename = req.body.image
    if (req.file && req.file.filename) {
        image_filename = req.file.filename
    }

    if (!image_filename) {
        return res.status(400).json({ success: false, message: "Image is required" })
    }

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price) || 0,
        category: req.body.category,
        image: image_filename,
    })

    try {
        const savedFood = await food.save()
        res.json({ success: true, message: "Food Added", data: savedFood })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Error saving food" })
    }
}

// all food list
const listFood=async(req,res)=>{
     try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json(500).json({ success: false, message: "Error fetching foods" });
  }
}
// remove food item
const removeFood=async(req,res)=>{
    try {
        const id = req.body?.id || req.body?.ids?.[0] || req.params?.id || req.query?.id
        if (!id) {
            return res.status(400).json({ success: false, message: 'Food id is required' })
        }

        const food = await foodModel.findById(id)
        if (!food) {
            return res.status(404).json({ success: false, message: 'Food item not found' })
        }

        const deletedFood = await foodModel.findByIdAndDelete(id)
        if (deletedFood && deletedFood.image) {
            const imgPath = path.join(__dirname, '..', 'uploads', deletedFood.image)
            fs.unlink(imgPath, (err) => {
                if (err) {
                    console.error('Error deleting image file:', err)
                }
            })
        }

        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Error removing food" })
    }
}

export {addFood,listFood,removeFood}

