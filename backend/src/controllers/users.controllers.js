const usersCtrl = {};
const User = require('../models/users');
const passport = require('passport');
const auth = require('../helpers/auth');


usersCtrl.createNewUser = async (req, res) => {
    const {name, lastname, birthdate, dni, location, email, password, password_confirmation} = req.body;
    let messages = [];

    if (password !== password_confirmation) {
        messages.push({type: 'error', text: 'Passwords do not match, please try again'});
    } 

    const passwordLength = 4;
    if (password.length < passwordLength ) {
        messages.push({type: 'error', text: `Passwords must be, at least, ${passwordLength} characters long.`});
    }

    if (messages.length > 0 ) {
        const user_errors = {
            messages: messages,
            name: name,
            lastname: lastname,
            birthdate: birthdate,
            dni: dni,
            location, location,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        console.log(user_errors);
        res.json(user_errors);

    } else {
            const userEmail = await User.findOne({email: email}) || false;

            if (userEmail.email && userEmail.email === email) {
                messages.push({type: 'error', text: 'User Already exists. Try logging-in!'});
                console.log(messages);
                res.json(messages);

            } else {
                const newUser = new User({
                    name,
                    lastname,
                    birthdate,
                    dni,
                    location,
                    email,
                    password
                });
                newUser.password = await newUser.encryptPassword(password);

                await newUser.save((err) => {
                    if (err) {
                        console.log(messages);
                        return res
                            .status(500)
                            .json({messages: `Error creating user: ${err}`});

                    } else {
                        messages.push({type: 'ok', text: 'User Registered successfully!'});
                        console.log(newUser);
                        return res.json({messages});

                    }
                });
            }
        }
    }

    usersCtrl.login = async (req, res) => {
        const { email, password } = req.body;

        const userQuery = await User.findOne({email: email}) || false;

        if (userQuery) {
            const isValidated = await userQuery.validatePassword(password);
            // console.log("is validated: " + isValidated);

            if (isValidated) {
                res.json({type: 'ok', text: 'Validation Successful!'});

            } else {
                res.json({type: 'error', text: 'Wrong password, please try again!'});   

            }
        } else {
            res.json({type: 'error', text: 'User does not exist, please Sign up!'});

        }
      }

module.exports = usersCtrl;
