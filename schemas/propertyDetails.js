const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertyDetailsSchema = new Schema({

    length: { type: Number, required: true },
    breadth: { type: Number, required: true },
    totalArea: { type: Number, required: true },
    areaUnit: { type: String, required: true },
    noOfBHK: { type: Number, required: true },
    noOfFloors: { type: Number, required: true },
    attached: { type: Boolean },
    westernToilet: { type: Boolean },
    furnished: { type: Boolean },
    carParking: { type: Boolean },
    lift: { type: Boolean },
    electricity: { type: Boolean },
    facing: { type: String }
})

const PropertyDetails = mongoose.model("PropertyDetails", PropertyDetailsSchema)

module.exports=PropertyDetails