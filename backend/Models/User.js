const moogoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userschema = new moogoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a name"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter a email"],
    unique: [true, "Email Already Exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "password must be at least 6 character"],
    select: false,
  },

  posts: [
    {
      type: moogoose.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: moogoose.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: moogoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

userschema.pre("save", async function (next) {
 if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
 }

 next();
});

userschema.methods.matchPassword = async function (password){
   return await bcrypt.compare(password,this.password); 
}

userschema.methods.generateToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
}
module.exports = moogoose.model("user", userschema);
