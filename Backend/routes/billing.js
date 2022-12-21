const express = require('express');
const{Bill} = require('../models/index')
const Product = require('../models/index').Product
const router = express.Router();


function Verify_Bill_Amount(items,billAmount)
{
   let total=0;
   let bill_calc=items.map((item)=>
   {

      total=total+item.totalPrice
   })
   if(total!=billAmount)
   {
         billAmount=total
   }
   return billAmount

}


router.post('/', async (req, res) => {
   // console.log(req.body.data)

   let {customerName,contactNumber} = req.body.data.UserDetails
   let {items,billAmount}=req.body.data;

  // Verify the   Bill Amount.

   billAmount=Verify_Bill_Amount(items,billAmount)


   try {
      const bill = await Bill.create({customerName,contactNumber,billAmount});
      let billId=bill.dataValues.id


      const saved_items= items.map(async (item) => {

      const {productName,price,quantity,totalPrice} = item


         const saved_item = await Product.create({ productName,price,quantity,totalPrice,billId });
         console.log(saved_item)
         return saved_item

      });
      console.log({saved_items,bill})
      res.status(200).json("Bill Details Saved")

  } catch (err) {
      console.log(err)
      return res.status(500).json(err);
   }
});
module.exports = router;
