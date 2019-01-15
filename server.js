const express = require("express");
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up an express app
const app = express();



// app.get("/city", (req, res) => res.send("HELLO WORLD"));

//initialize body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/itinerary/:id', express.static('uploads'));
app.use('/activity/:id', express.static('uploads'));

const db = "mongodb://aputyera:Marthica7@ds145474.mlab.com:45474/mytineraryapp";
mongoose.connect(db,
{useNewUrlParser: true}).then(()=>{
    console.log("mongoDB connected..")
}).catch(err => {
    console.error(err,'Database connection error')
  }); 

  //initialize routes
app.use("/api", routes);

// set up and listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));


