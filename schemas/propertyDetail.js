const mongoose = require("mongoose");

const PropertyDetail= mongoose.Schema({
    length:{type:Number,require:true},
    breadth:{type:Number,require:true},
    TotalArea:{type:Number,require:true},
    AreaUnit:{type:Number,require:true},
    bhks :{type:Number,require:true},
    Floor:{type:Number,require:true},
    Attached:{type:String},
    westernToilet:{type:String},
    furnished:{type:String},
    parking:{type:String,require:true},
    lift : {type:Number,require:true},
    electricity:{type:String},// change to boolean and can be changed to string while displaying in ui
    facing:{type:String,require:true}
})

const PropertyDetails = mongoose.Model("PropertyDetails",PropertyDetail)