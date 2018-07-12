const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: { type: String, required: true},
    email: {type: String, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
    name: {type: String, required: false},
    username: {type: String, required: false},
    password: { type: String, required: true },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;