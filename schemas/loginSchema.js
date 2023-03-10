const mongoose = require("mongoose");
// require('mongoose-type-email');
const loginSchema = mongoose.Schema({
    email: {
        type: String,
        // trim: true,
        // lowercase: true,
        unique: true,
        // required: 'Email address is required',
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{type:String,require:true,min:6,max:15}
})

loginSchema.methods.generateToken = function () {
    return jwt.sign({_id:this._id}, process.env.JWT_SECRET)
}


const Login = mongoose.model("loginDetails",loginSchema)
module.exports = Login;