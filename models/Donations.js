const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const donationSchema= new Schema({
    suscriber: {type: mongoose.Schema.ObjectId, ref: Sucribers, required: true},
    amount: Number,
    message: String,
})

const Donations = mongoose.model(donationSchema);
module.exports = Donations

/*
Hi T.T

-Suscriber
-amount
-Message 
*/