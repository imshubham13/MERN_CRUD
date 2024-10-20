const mongoose = require('mongoose');

const signup = new mongoose.Schema({
    name : {
        type:string,
        required:true,
    },
    email : {
        type:string,
        required:true,
    },
    phone : {
        type:string,
        required:true,
    },
    date : {
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('studentmaster', signup);