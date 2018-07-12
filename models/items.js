const mongoose = require(“mongoose”);
const Schema = mongoose.Schema;

const itemSchema = new Schema({
   id: { type: Number, required: true },
   itemType: { type: String, required: true },
   note: { type: String, required: true },
});

const Item = mongoose.model(“Item”, itemSchema);

module.exports = Item;