const express = require('express');

const { createProperty, createNewBasicInfo, createNewPropertyDetails, createNewGeneralInfo, createNewLocationInfo } = require('../controllers/propertyController.js')

const router = express.Router()


//Create a Posts
//Use verify token as middleware
router.post("/", createProperty)

router.post("/basicinfo", createNewBasicInfo)
router.post("/propertydetails", createNewPropertyDetails)
router.post("/generalinfo", createNewGeneralInfo)
router.post("/locationinfo", createNewLocationInfo)


module.exports = router;