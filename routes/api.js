const express = require('express');
const router = express.Router();
const multer = require('multer');
const city = require("./../models/city");
const Itinerary = require("./../models/itinerary");
const Activity = require("./../models/activity");
const Comment = require("./../models/comment");
const mongoose = require('mongoose');


//creating storage for uploaded files
const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
cb(null, file.originalname);
}
});

const upload = multer({storage: storage});


//get city from mlab db
router.get('/city', function(req, res){
    city.find().then(cities => res.send(cities));
});

//get itinerary from mlab db

router.get('/itinerary', function(req, res){
    console.log("in")
    Itinerary.find().then(itineraries => res.send(itineraries));
});

//get itineraries by city

router.get('/itinerary/:city_id', function(req, res){
    Itinerary.find({city_id:req.params.city_id}).then(results => res.send(results));
});

//get activities from mlab db

router.get('/activity', function(req, res){
    console.log("in")
    Activity.find().then(activities => res.send(activities));
});


//get activities by itinerary

router.get('/activity/:itinerary_id', function(req, res){
    Activity.find({itinerary_id:req.params.itinerary_id}).then(results => res.send(results));
});

//get comments from mlab

router.get('/comments', function(req, res){
    Comment.find().then(comments => res.send(comments));
});


//get comments by itinerary

router.get('/comments/:itinerary_id', function(req, res){
    console.log("in",req.params.itinerary_id)
    Comment.find({itinerary_id:req.params.itinerary_id}).then(results => res.send(results));
});


//add city to the mlab db

router.post('/city', function(req, res){
// res.send({type:'POST'});
city.create(req.body).then(function(city){
res.send(city);
});
});

//add itinerary to mlab db

router.post('/itinerary', upload.single('profilePic'), (req, res) => {
    console.log(req.file)
    const itinerary = Itinerary({
        city_id: req.body.city_id,
        title: req.body.title,
        profilePic: req.file.path,
        rating: req.body.rating,
        duration: req.body.duration,
        cost: req.body.cost,
        hashtags: req.body.hashtags,
    });
    Itinerary.create(itinerary).then(function(results){
    res.send(results);
    });
});

//add activity to mlab db

router.post('/activity', upload.single('activityPic'), (req, res) => {
    console.log(req.file)
    const activity = Activity({
        itinerary_id: req.body.itinerary_id,
        title: req.body.title,
        activity: req.body.activity,
        activityPic: req.file.path,
        city_id: req.body.city_id,
    });
    Activity.create(activity).then(function(results){
    res.send(results);
    });
});

//add comments to mlab db

router.post('/comments', (req, res) => {
    console.log("here",req.body);
    const comment = Comment({
        itinerary_id: req.body.itinerary_id,
        user: req.body.user,
        comment: req.body.comment
    });
    Comment.create(comment).then(function(results){
    res.send(results);
    });
});

module.exports = router;