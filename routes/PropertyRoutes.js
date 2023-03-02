const express = require('express');

const { createProperty } = require('../controllers/propertyController.js')

const router = express.Router()


//Create a Posts
//Use verify token as middleware
router.post("/", createProperty)


module.exports = router;