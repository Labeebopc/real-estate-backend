const express = require("express");
const router = express.Router
const BasicInfo = require( "../schemas/basicInfo");
// import { route } from "./login";

router.get("/propertyDetails",async (req,res)=>{
    try{
        const basicInfo = await BasicInfo.find().sort({_id:-1})
        res.json(basicInfo)
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

})
router.get("/propertyDetails/:id",async (req,res)=>{
    try{
        const basicInfo = await BasicInfo.findOne(pp)
        res.json({basicInfo})
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
})

module.exports = router