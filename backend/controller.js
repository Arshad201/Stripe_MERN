const { Payment } = require("./model");
const razorpay = require('razorpay');
const crypto = require('crypto');

//Checkout
exports.checkout = async(req, res, next) =>{

    console.log(req.body.amount)

    const instance = new razorpay({
        key_id: process.env.KEY_ID,
        key_secret: process.env.KEY_SECRET
    });

    try {

        const options = {
            amount: Number(req.body.amount*100),
            currency: 'INR',
            
        }
    
        const order = await instance.orders.create(options);

        console.log(order);

        res.status(201).json({
            success: true,
            order
        })

        
    } catch (error) {
        console.log(error);
    }
   
}

//Verification
exports.verification = async(req, res, next) =>{

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const body = razorpay_order_id + " " + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET).update(body.toString()).digest()

    const isAuth = expectedSignature === razorpay_signature;

    if(isAuth){
        await Payment.create({razorpay_order_id, razorpay_payment_id, razorpay_signature})
        res.redirect(`http://localhost:5173/paymentsuccess?refrene=${razorpay_payment_id}`)
    }else{
        res.status(400).json({
            success: false
        })
    }


}

exports.geKey = (req, res)=>{
    res.status(200).json({
        key:process.env.KEY_ID
    })
}