const mongoose = require("mongoose");

const {
  Schema,
  model
} = require("mongoose");

const bcrypt = require("bcryptjs");

const transactionSchema = new Schema({
  origin: {
    type: String,
    required: true
  },
  //poner unique antes que required
  destiny: {
    type: String,
    required: true
  },
  destiny_name: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at"
  }
});
const Transaction = model("Transaction", transactionSchema);
module.exports = {
  Transaction
};