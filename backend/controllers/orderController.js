import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place Order
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });

        await newOrder.save();

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: `${item.name} (Qty: ${item.quantity})`,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        // Delivery Charges
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 200, // ₹2 × 100
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        return res.json({
            success: true,
            session_url: session.url,
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "Payment session creation failed",
        });
    }
};

// Verify Payment
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;

    try {
        if (success === "true") {

            const order = await orderModel.findByIdAndUpdate(
                orderId,
                { payment: true },
                { returnDocument: 'after' }
            );

            if (!order) {
                return res.json({
                    success: false,
                    message: "Order not found",
                });
            }

            // Clear cart only after successful payment
            await userModel.findByIdAndUpdate(
                order.userId,
                { cartData: {} }
            );

            return res.json({
                success: true,
                message: "Payment successful",
            });
        }

        await orderModel.findByIdAndDelete(orderId);

        return res.json({
            success: false,
            message: "Payment cancelled",
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "Payment verification failed",
        });
    }
};

// User Orders
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({
            userId: req.body.userId,
        });

        return res.json({
            success: true,
            data: orders,
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};

// Admin - List All Orders
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});

        return res.json({
            success: true,
            data: orders,
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};
//api for updating order status by admin can be added here
const updateStatus=async(req,res)=>{
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({
            success:true,            message:"Order status updated successfully"
        })
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Failed to update order status"})
    }
}

export {
    placeOrder,
    verifyOrder,
    userOrders,
    listOrders,
    updateStatus
};