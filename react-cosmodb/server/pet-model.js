const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    description: String,
    price:Number
  },
  { autoIndex: false }
);

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;