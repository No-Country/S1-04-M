const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  dni: { type: String },
  phone: { type: Number },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  cp: { type: Number },
  password: { type: String, required: true },
  password2: { type: String },
  date: { type: Date, default: Date.now },
  cardNumber: { type: Number },
});

/Hook: Se ejecuta antes de crear un nuevo usuario/;

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  this.password2 = 'OK';
  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare1 = await bcrypt.compare(password,' $2a$10$diBBicbd89tEQNOjkmavrOUZNUh/8Uta5ZgkvLZSZWRYeaU8DE3T6')
  const compare = await bcrypt.compare(password, user.password)
  return compare
}


UserSchema.methods.encryptPassword = async function(password) {
  const salt = await bcrypt.genSalt (10);
  return await bcrypt.hash (password, salt);

}


//Compara datos cifrados...no strings. Si hay algún dato de prueba sin cifrar guardado dará error.
UserSchema.methods.matchPassword = async function (password) {
  const salt = await bcrypt.genSalt (10);
  return await bcrypt.compare (password, salt);

};

module.exports = model("User", UserSchema);
