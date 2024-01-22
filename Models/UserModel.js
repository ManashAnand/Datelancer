const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, min: 4,trim:true },
  password: { type: String, required: true },
  email: {type:String, required: true, unique: true},
  role: {type:String, default:"Freelancer"}
},{
  timestamps: true 
});

const UserModel =mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = UserModel;