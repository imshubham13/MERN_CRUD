const express = require('express');
const router = express.Router();
const signupinfo = require('./studentModel');

//insertdata

router.post('/insertData',(req,res) => {
    const insert = new signupinfo({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone
    });
    insert.save();
})

module.exports = router;