const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationInfoSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    city: { type: String },
    area: { type: String, require: true },
    pincode: { type: Number },
    address: { type: String },// need to check whether the address is stored in separated by comma
    landmark: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
})


const LocationInfo = mongoose.Model("LocationInfo", LocationInfoSchema)