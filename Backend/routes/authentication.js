let express = require('express');
const router = express.Router();

router.post('/signin', async (req, res) => {
 

    let hash=""
    try
    {
      hash=await bcrypt.hash(req.body.password,10);
    
     console.log(hash)
    }
   
    catch(error)
    {
      console.log("error")
    }
     const signinUser = new Users({
       email: req.body.email,
       password: hash,
     
     });
     
     console.log(req.body)
     const newsignin=await signinUser.save()
     console.log(newsignin)
     if (newsignin) {
       res.send(JSON.stringify({
         _id: newsignin.id,
         email: newsignin.email,
         isAdmin: newsignin.isAdmin,
         token: getToken(signinUser),
       }));
   
     } else {
       res.status(401).send({ message: 'Invalid Email or Password.' });
     }
   });
