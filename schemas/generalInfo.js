const mongoose = require("mongoose");

const generalInfo = mongoose.Schema({
    name:{type:String,require:true},
    mobileNumber:{type:Number,require:true},
    postedBy:{type:String},
    saleType:{type:String},
    FeaturedPackage:{type:String},
    ppdPackage:{type:String}
})

const OwnerInfo = mongoose.Model("OwnerInfo",generalInfo)