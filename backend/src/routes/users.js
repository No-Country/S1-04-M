const express = require('express');
const users = require('../models/users');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');

router.get('/users/signin', (req,res)=>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
    // ,
    // failureFlash: true
}));
router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
});

router.post('/users/signup', async (req,res)=>{
    const {name, email, password, confirm_password} = req.body; // DATA REQUERIDA DEL FORMULARIO DE REGISTRO
    const errors = [];
    const PASSWORD_LENGTH = 4;
    // const fields = [name, email, password, confirm_password];

    // const fields.filter(field => field.length <= 0);

    if(password !== confirm_password) {
        errors.push({text: 'Password do not match'});
    }
    if(password.length < PASSWORD_LENGTH) {
        errors.push({text: "Password should be, at least, 4 characters long."})
    }
    if(errors.length > 0 ) {
        res.render('users/signup', {errors, name, email, password, confirm_password}); // DATA ENVIADA PARA RENDERIZAR
    } else {
        const emailUser = await User.findOne({email:email});
        if(emailUser) {
            const emailExistMessage = 'Email already registered!'
            console.log(emailExistMessage);
            res.redirect('/users/signup');
        }
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        const userCreationMessage = 'User successfully created!';
        console.log(userCreationMessage);

        res.redirect('/users/signin');
    }
});

router.get('/users/logout', (req,res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;