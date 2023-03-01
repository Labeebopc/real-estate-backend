const mongoose = require("mongoose");

const BasicInfo = require('../schemas/basicInfo.js')
const PropertyDetails = require('../schemas/propertyDetails.js')
const GeneralInfo = require('../schemas/generalInfo.js')
const LocationInfo = require('../schemas/locationInfo.js')

const Login = require('../schemas/loginSchema.js')



/******************************************************* Create a Post *********************************************************/
//export 
const createProperty = async (req, res) => {

    const { propertyType, negotiable, price, ownership, propertyAge, propertyApproved, propertyDescription, bankLoan } = req.body.basicInfo
    const { length, breadth, totalArea, areaUnit, noOfBHK, noOfFloors, attached, westernToilet, furnished, carParking, lift, electricity, facing } = req.body.propertyDetails
    const { name, mobile, postedBy, saleType, featuredPackage, ppdPackage, image } = req.body.generalInfo
    const { email, city, area, pincode, address, landmark, latitude, longitude } = req.body.locationInfo

    const ppd_id = "PPID" + Math.floor(1000 + Math.random() * 9000);
    const views = parseInt(Math.random() * 10);
    const daysLeft = parseInt(Math.random() * 20);

    //let user = await Login.findOne({ email });

    try {
        const basicInfo = await BasicInfo.create({ ppdId: ppd_id, views: views, daysLeft: daysLeft, ...req.body.basicInfo })
        const propertyDetails = await PropertyDetails.create({ ...req.body.propertyDetails })
        const generalInfo = await GeneralInfo.create({ ...req.body.generalInfo })
        const locationInfo = await LocationInfo.create({ ...req.body.locationInfo })
        //const property = await Property.create({ ppdId: ppd_id, views: views, daysLeft: daysLeft, userId: user._id, ...req.body })

        res.status(201).json({ success: true, message: "Property Created Successfuly", basicInfo, propertyDetails, generalInfo, locationInfo })

    } catch (error) {

        res.status(500).json({ success: false, error: error.message })
    }


}

module.exports = { createProperty }