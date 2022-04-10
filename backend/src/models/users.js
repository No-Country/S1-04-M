const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true},
    lastname: {type: String, required: true},
    birthdate: {type: String, required: true},
    dni: {type: Number, required: true},
    location: {type: String, required: true},
    email: { type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});



UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.validatePassword = async function(password) {
    const user = this;
    const comparation = await bcrypt.compare(password, user.password);
    return comparation;
}
module.exports = model('User', UserSchema);