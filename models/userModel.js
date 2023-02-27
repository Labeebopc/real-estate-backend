const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const objectId = Schema.Types.objectId;




const UserSchema = new Schema({
    email: { type: String, required: [true, "Please provide an email"] },

    password: { type: String, required: true, minlength: 6, select: false },

    properties: { type: objectId, ref:"Property" }

})

module.exports = { UserSchema };