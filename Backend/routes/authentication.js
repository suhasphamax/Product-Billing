let express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {


  let hash = ""
  try {
    // hash = await bcrypt.hash(req.body.UserDetails.password, 10);
    console.log(req.body)
    // console.log(hash)

  }

  catch (error) {
    console.log("error")
  }

});

router.post('/login', async (req, res) => {


 console.log(req.body)

});
module.exports=router;
