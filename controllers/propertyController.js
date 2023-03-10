const mongoose = require("mongoose");

const BasicInfo = require('../schemas/basicInfo.js')
const PropertyDetails = require('../schemas/propertyDetails.js')
const GeneralInfo = require('../schemas/generalInfo.js')
const LocationInfo = require('../schemas/locationInfo.js')

const Login = require('../schemas/loginSchema.js')



/******************************************************* Create a Property *********************************************************/
//export 
const createProperty = async (req, res) => {


    // console.log("Data-1", req.body.data[0].current);
    // console.log("Data-2",req.body.data[1].current);
    //console.log("Data-3",req.body.data[2].current);
    // console.log("Data-4",req.body.data[3].current);

    // const { propertyType, negotiable, price, ownership, propertyAge, propertyApproved, propertyDescription, bankLoan } = req.body.data[0].current
    // const { length, breadth, totalArea, areaUnit, noOfBHK, noOfFloors, attached, westernToilet, furnished, carParking, lift, electricity, facing } = req.body.data[1].current
    // const { name, mobile, postedBy, saleType, featuredPackage, ppdPackage, image } = req.body.data[2].current
    // const { email, city, area, pincode, address, landmark, latitude, longitude } = req.body.data[3].current

    //let user = await Login.findOne({ email });

    try {

        const ppd_id = "PPID" + Math.floor(1000 + Math.random() * 9000);
        const views = parseInt(Math.random() * 10);
        const daysLeft = parseInt(Math.random() * 20);


        const basicInfo = await BasicInfo.create({ ...req.body.data[0].current, ppdId: ppd_id, views: views, daysLeft: daysLeft })
        const propertyDetails = await PropertyDetails.create({ ...req.body.data[1].current })
        const generalInfo = await GeneralInfo.create({ ...req.body.data[2].current })
        const locationInfo = await LocationInfo.create({ ...req.body.data[3].current })


        res.status(201).json({ success: true, message: "Property Created Successfuly", propertyDetails, generalInfo, locationInfo })

    } catch (error) {

        res.status(500).json({ success: false, error: error.message })
    }


}




/************************* Create new Basic Info *****************************/
const createNewBasicInfo = async (req, res) => {

    console.log(req.body);

    const ppd_id = "PPID" + Math.floor(1000 + Math.random() * 9000);
    const views = parseInt(Math.random() * 10);
    const daysLeft = parseInt(Math.random() * 20);

    try {
        const basicInfo = await BasicInfo.create({ ppdId: ppd_id, views: views, daysLeft: daysLeft, ...req.body })

        res.status(201).json({ success: true, message: "Basic Info Created Successfuly", basicInfo })

    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}


/********************* Create new Property Details *************************/
const createNewPropertyDetails = async (req, res) => {

    console.log(req.body);

    try {

        const propertyDetails = await PropertyDetails.create({ ...req.body })


        return res.status(201).json({ success: true, message: "Property Details Created Successfuly", propertyDetails })

    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

/************************* Create new General Info *****************************/
const createNewGeneralInfo = async (req, res) => {

    try {
        const generalInfo = await GeneralInfo.create({ ...req.body })

        res.status(201).json({ success: true, message: "General Info Created Successfuly", generalInfo })

    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}


/************************* Create new Location Info *****************************/
const createNewLocationInfo = async (req, res) => {

    try {

        const locationInfo = await LocationInfo.create({ ...req.body })

        res.status(201).json({ success: true, message: "Location Info Created Successfuly", locationInfo })

    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

module.exports = { createProperty, createNewBasicInfo, createNewPropertyDetails, createNewGeneralInfo, createNewLocationInfo }

