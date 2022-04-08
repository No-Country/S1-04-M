const express = require('express');
const router = express.Router();
const {createNewUser, login} = require('../controllers/users.controllers');

// router.route('/users/login')
//     .post (passport.authenticate('local', {
//         successRedirect: "/dashboard",
//         failureRedirect: "/login",
//     }));

router.route('/users/login')
    .post(login);

router.route('/users/signup')
    .post(createNewUser);

router.route('/users/logout')
    .post((req,res)=>{
        req.logOut;
        res.redirect('/');
    });

module.exports = router;