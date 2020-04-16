const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const suscriberSchema= new Schema({
    Nickname: String,
    pin: Number,//no se si esto hace referencia a un password o que?
    email: String,
})

const Suscribers = mongoose.model('Suscribers',suscriberSchema);
module.exports = Suscribers



/*
Hi T.T

-NickName
-Pin
-Email
*/