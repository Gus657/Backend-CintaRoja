/*
MongoDB Atlas URL
*/
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://657:657@gusdev-m496e.mongodb.net/api?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('DB Connected'))
.catch(()=>console.log('Error on Connection'));