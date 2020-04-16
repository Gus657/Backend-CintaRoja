const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const Suscribers =  require('../models/Suscribers');
const donationSchema= new Schema({
    suscriber: String,
    amount: Number,
    message: String,
})

const Donations = mongoose.model('DOnations',donationSchema);
module.exports = Donations

/*
Hi T.T

-Suscriber
-amount
-Message 
*/