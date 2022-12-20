const express = require('express');
var Product = require('../models/index').Product
const router = express.Router();




router.post("/item", async (req, res) => {
   const {product_name,price,quantity,total_price} = req.body
   const productName= product_name


    const totalPrice=total_price

   try {
      const item = await Product.create({ productName,price,quantity,totalPrice });
      return res.json(item);
   } catch (err) {
      return res.status(500).json(err);
   }
});

// router.post('/', async (req, res) => {
//    console.log(req.body.data.items)
//    res.status(200).json({ message: ' Bill Details Saved' })
// });
module.exports = router;
