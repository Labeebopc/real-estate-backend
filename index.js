const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = require("dotenv").config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const propertyRoutes=require('./routes/PropertyRoutes.js')


const app = express();

//Input file types...
app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/v1/add-new-property',propertyRoutes)


//Defie PORT and Database
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';


//Connect to the PORT and Database
app.listen(PORT, () => console.log(`Server running on Port :${PORT}`))
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected Succesfully'))
    .catch((error) => console.log(error.message));