const mongoose = require("mongoose")


const Schema = mongoose.Schema;
//const objectId = Schema.objectId;


const BasicInfoSchema = new Schema({

    propertyType: { type: String, required: true },
    negotiable: { type: Boolean },
    price: { type: Number },
    ownership: { type: String },
    propertyAge: { type: Number },
    propertyApproved: { type: Boolean },
    propertyDescription: { type: String },
    bankLoan: { type: Boolean }
})

 const BasicInfo = mongoose.model("BasicInfo", BasicInfoSchema)
 module.exports = BasicInfo
