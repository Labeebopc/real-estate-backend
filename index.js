const express = require("express");
const cors = require("cors");
const login = require("./routes/login.js");
// const PropertyDetails = require("./routes/PropertyDetails.js")
const Login = require("./schemas/loginSchema.js")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const bodyParser= require('body-parser')
mongoose.set('strictQuery', true)

const BasicInfo = require("./schemas/basicInfo.js")
const propertyRouter = require('./routes/PropertyRoutes.js')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      credentials: true,
    })
  );

  // For posting new property
app.use('/api/v1/addnewproperty', propertyRouter)


// mongo connection to mongo atlas
const uri = `mongodb+srv://Divyasree:divyasree@login.xoamhd7.mongodb.net/?retryWrites=true&w=majority`


//Connection to mongo db i.e to login part 
mongoose.connect(uri,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to mongo db successfully")
    }
})


//Singing up a new user
app.post("/signUp", 
    //validating the data that entered which is a middleware i.e express validator
    body("data.email").isEmail(),
    body("data.password").isLength({min:6,max:15}),
    async(req,res)=>{
        // console.log(req.body)
        const {email,password} = req.body.data
        console.log(email,password)
        // res.send("ok")
    try{
        const errors = validationResult(req);
        console.log(errors)
        if(!errors.isEmpty()){
            return res.status(400).json({err:errors.array()})
        }
        //Check if username already exists
        const user = await Login.findOne({email});
        console.log(user)
        if(user){
            return res.status(400).send({
                message:"User already exists"
            })
        }
        // creating new user in database
        //using bcryp for securing the password enetered i.e hashing
        bcrypt.hash(password, 10,async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.send({
                    message:err.message
                })
            }

        try{
            const userData = new Login({
                ...{email,password:hash}
            })
            const data = await userData.save()
            console.log(data)
            res.send({message:"successfully registered"})
        }
        catch(e){
            res.send({message:e.message})
        }
    });
}
catch(e){
        res.json({message:e.message})
}
})

//login for already existing user
app.use("/",login)

app.get('/signout', async (req, res) => {
    try {

        res.status(200)
        .cookie("token", null, {expires: new Date(Date.now()), httpOnly: true})
        .json({
            success: true,
            massage: "sign Out",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: error.message,
        })
    }
})

app.get("/propertydetails",async(req,res)=>{
    // res.send("ok")
    try{
        const basicinfo= await BasicInfo.find().sort({_id:-1});
        res.json(basicinfo)
    }
    catch(err){
        res.status(400).json({
            message:err.message,
        })
    }
})

app.get("/propertyDetails/:id",async (req,res)=>{
    try{
        const basicInfo = await BasicInfo.findOne({ppdId:req.params.id}).sort({_id:-1})
        res.json(basicInfo)
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

})


app.listen(8080,()=>{
    console.log("listening at server 8080....")
})


// _id": "64004840779cf66f0151d6fc",
// "propertyType": "flat",
// "negotiable": false,
// "price": 0,
// "ownership": "",
// "propertyAge": 0,
// "propertyApproved": "false",
// "propertyDescription": "",
// "bankLoan": false,
// "ppdId": "PPID2058",
// "views": 0,
// "daysLeft": 1,
// "__v": 0