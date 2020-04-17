const express = require('express')
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000 
require('./database');

//middelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//Routes
app.use(require('./routes/Suscribers'));
app.use(require('./routes/Donations')); 

//Default Route to Documentation
app.get('*', (req, res)=> res.sendFile(path.join(__dirname+'/public/index.html')));

//Enable Working Port
app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); 
