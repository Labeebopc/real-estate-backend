const mongoose = require("mongoose");

const Area = mongoose.Schema({
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    city:{type:String,require:true},
    area:{type:String,require:true},
    pincode:{type:Number},
    Address:{type:String},// need to check whether the address is stored in separated by comma
    landmark:{type:String},
    latitude:{type:Number},
    longitude:{type:Number}
})


const Location = mongoose.Model("Location",Area)