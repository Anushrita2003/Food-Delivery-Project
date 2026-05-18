import foodModel from "../models/foodModel.js";
import fs from 'fs'


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
    res.status(500).json({ success: false, message: "Error fetching foods" });
  }
}
// remove food item
const removeFood=async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        if (food && food.image) {
            fs.unlink(`uploads/${food.image}`, () => {})
        }

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Error removing food" })
    }
}

export {addFood,listFood,removeFood}

