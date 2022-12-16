
let express = require('express');
let logger = require('morgan');
const cors=require('cors');

let bodyParser = require('body-parser')
let authentication = require('./routes/authentication');
let billing = require('./routes/billing');


let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());



// app.use('/authentication',authentication);
app.use('/billing',billing);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));