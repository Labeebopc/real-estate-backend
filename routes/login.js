const express = require("express");
const Login = require("../schemas/loginSchema.js")
const router = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');


router.post("/login", 
    //validating the data that entered which is a middleware i.e express validator
    body("formData.email").isEmail(),
    async(req,res)=>{
        console.log(req.body.formData)
        const {email,password} = req.body.formData
        //console.log(email,password)
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({err:errors.array()})
        }
        //Check if username already exists
        const user = await Login.findOne({email});
        console.log(user)
        if(!user){
            return res.status(404).send({
                message:"user not found please signup to login"
            })
        }
        bcrypt.compare(password, user.password,function(err, result) {
            // result == true
            console.log(err)
            if(result){
                return res.json({
                    message:"successfully logged in"
                })
            }
            // console.log(result)
            // console.log(err)
            if(!result)
            {
                console.log("oncorrect")
                return res.status(401).json({
                    
                    message:"please enter correct password"
                })
            }
        });
    }
    catch(e){
        res.json({message:e.message})
    }
})


module.exports = router