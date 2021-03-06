const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Ulaundry"
);

const itemsSeed = 
[{
  id: "",
  itemType: "",
  note: "",
}] 

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
