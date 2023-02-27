const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const objectId = Schema.Types.objectId;




const PostSchema = new Schema({
    propertyType: { type: String },
    negotiable: { type: String },
    price: { type: Number },
    ownership: { type: String },
    propertyAge: { type: String },
    propertyApproved: { type: String },
    propertyDescription: { type: String },
    bankLoan: { type: Number },
    length: { type: Number },
    breadth: { type: Number },
    totalArea: { type: Number },
    areaUnit: { type: String },
    noOfBHK: { type: Number },
    attached: { type: String },
    western: { type: String },
    furnished: { type: String },
    carParking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String },

    name: { type: String },
    mobile: { required: true, type: Number },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: String },
    ppdPackage: { type: String },

    email: { type: email },
    city: { type: String },
    area: { type: String },
    pincode: { type: Number },
    address: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    ppdId: { required: true, type: String },
    views: { required: true, type: Number },
    daysLeft: { required: true, type: Number },

    siteImage: { type: String },
    status: { type: String, default: "Unsold" },
    userId: {
        type: objectId,
        ref: 'User'
    }

}, { timestamps: true })

module.exports = { PostSchema };