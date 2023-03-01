const { default: mongoose } = require("mongoose");
const schema = require("mongoose");



const basicInfo = mongoose.Schema({
    propertyType:{type:String,require:true},
    negotable:{type:String,require:true},
    price:{type:Number,require:true},
    ownership:{type:String,require:true},
    propertyAge:{type:Number,require:true},
    propertyApproved:{type:String,require:true},
    propertyDescription:{type:String},
    bankloan:{type:String,require:true}
})

const BasicInfo = mongoose.Model("BasicInfo",basicInfo)