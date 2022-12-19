let express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
   console.log(req.body.data)
   res.status(200).json({ message: ' Bill Details Saved' })
   });
   
module.exports=router;
