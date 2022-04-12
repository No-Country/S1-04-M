const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  dni: { type: String },
  phone: { type: Number },
  adress: { type: String },
  city: { type: String },
  country: { type: String },
  cp: { type: Number },
  password: { type: String, required: true },
  password2: { type: String },
  date: { type: Date, default: Date.now },
});

/Hook: Se ejecuta antes de crear un nuevo usuario/;

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  console.log("isvalidPassword");
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.compare(password, salt);
};

//Compara datos cifrados...no strings. Si hay algún dato de prueba sin cifrar guardado dará error.
UserSchema.methods.matchPassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

module.exports = model("User", UserSchema);
