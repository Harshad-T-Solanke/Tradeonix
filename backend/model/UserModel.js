const { model } = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
});

const UserModel = model("User", UserSchema);    
module.exports = { UserModel };