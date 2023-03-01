const express = require("express");
const cors = require("cors");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const Login = require("./schemas/loginSchema.js")
const app = express();
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      credentials: true,
    })
  );
app.use(express.urlencoded({extended: true}))

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
app.post("/", 
    //validating the data that entered which is a middleware i.e express validator
    body("email").isEmail(),
    body("password").isLength({min:6,max:15}),
    async(req,res)=>{
        console.log(req.body)
        const {email,password} = req.body
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
            return res.send({
                message:"User already exists"
            })
        }
        // creating new user in database
        //using bcryp for securing the password enetered i.e hashing
        else{bcrypt.hash(password, 10,async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.send({
                    message:failed
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
    })};
}
catch(e){
        res.json({message:e.message})
}
})

//login for already existing user

app.post("/login", 
    //validating the data that entered which is a middleware i.e express validator
    body("formData.email").isEmail(),
    async(req,res)=>{
        console.log(req.body.formData)
        const {email,password} = req.body.formData
        console.log(email,password)
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({err:errors.array()})
        }
        //Check if username already exists
        const user = await Login.findOne({email});
        console.log(user)
        if(!user){
            return res.status(400).json({
                message:"user not found please signup to login"
            })
        }
        bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            if(result){
                res.json({
                    message:"successfully logged in"
                })
            }
        });

    }
    catch(e){
        res.json({message:e.message})
    }
})

app.listen(8080,()=>{
    console.log("listening at server 8080....")
})


