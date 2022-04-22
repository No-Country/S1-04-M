const mongoose = require("mongoose");

const {
  Schema,
  model
} = require("mongoose");

const bcrypt = require("bcryptjs");

const cardSchema = new Schema({
  number: {
    type: String,
    unique: true,
    required: true
  },
  //poner unique antes que required
  user_id: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  internal: {
    type: Boolean,
    default: true
  },
  cvv: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});
const nextCardNumberSchema = new Schema({
  nextCardNumber: {
    type: String,
    required: true
  }
});
const destinationCardSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  card_number: {
    type: String,
    unique: true,
    required: true
  },
  //poner unique antes que required
  destination_name: {
    type: String,
    required: true
  },
  internal: {
    type: Boolean,
    default: true
  },
  alias: {
    type: String,
    required: true
  }
});
const Card = model("Card", cardSchema);
const NextCardNumber = model("NextCardNumber", nextCardNumberSchema);
const DestinationCard = model("DestinationCard", destinationCardSchema);
module.exports = {
  Card,
  NextCardNumber,
  DestinationCard
};