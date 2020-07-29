const mongoose = require('../../../frontend/node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/LeMans',{useNewUrlParser:1});

const Schema = mongoose.Schema;

var signupdataSchema = new Schema(
    {
        title:String,
        firstName: String,
        lastName: String,
        dob:Date,
        email:String,
        password:String
    }
)

var signupdata = mongoose.model('signupdata', signupdataSchema);

module.exports= signupdata;