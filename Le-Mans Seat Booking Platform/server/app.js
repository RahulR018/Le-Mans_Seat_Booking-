const express = require('../frontend/node_modules/express');
var app = new express();
const signupdata = require('./src/models/signupdata');
const cors = require('../frontend/node_modules/cors');

var bodyparser = require('../frontend/node_modules/body-parser');
app.use(cors());

app.use(bodyparser.json());

//server on?
app.get('/',(req,res)=>{
    res.send('server is on');
});

//server got user signup data?
app.post('/signup/add', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var sign =
    {
        title: req.body.signup.title,
        firstName: req.body.signup.firstName,
        lastName: req.body.signup.lastName,
        dob: req.body.signup.dob,
        email: req.body.signup.email,
        password: req.body.signup.password
    };
    var sign = new signupdata(sign);
    sign.save();
});

app.listen(3000, () => {
    console.log('listening to port 3000');
})