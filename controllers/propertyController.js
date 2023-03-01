const mongoose = require("mongoose");
//const { PropertySchema } = 



// const Property = mongoose.model('Property', PropertySchema)

/******************************************************* Create a Post *********************************************************/
//export 
const createProperty = async (req, res) => {
    const { email } = req.body;
    const ppd_id = "PPID" + Math.floor(1000 + Math.random() * 9000);
    const views = parseInt(Math.random() * 10);
    const daysLeft = parseInt(Math.random() * 20);

    //let user = await User.findOne({email});

    try {

        //const property = await Property.create({ ppdId: ppd_id, views: views, daysLeft: daysLeft, userId: user._id, ...req.body })

        res.status(201).json({ success: true, property, message: "Property Created Successfuly" })

    } catch (error) {

        res.status(500).json({ success: false, error: error.message })
    }


}

module.exports = { createProperty }