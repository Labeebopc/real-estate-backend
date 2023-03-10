const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GeneralInfoSchema = new Schema({

    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: Boolean },
    ppdPackage: { type: String },
    image: { type: String }
})

const GeneralInfo = mongoose.model("GeneralInfo", GeneralInfoSchema)

module.exports = GeneralInfo
