
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register, (req, res, next)=>{
let newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.password
});
newUser.save((err, user)=>{
    if(err)
    {
        res.json({msg: 'Failed to add user'});
    }
    else{s
        res.json({msg:'User added successfully'});
    }
});
});

router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',(req,res,next)=>{
    User.find(function(err, users){
        res.send(users);
    });
});

module.exports = router;