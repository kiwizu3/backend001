const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    companyName:{
        required: true, 
        type:String
    },
    termsCode:{
        required: true, 
        type:String
    },
    creditLimit:{
        required: true, 
        type:Number
    }
})

module.exports = mongoose.model('User', userSchema)