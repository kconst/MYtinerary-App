const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create itinerary Schema & Model
const itinerarySchema = new Schema({
    city_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String
    },
    profilePic: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    cost: {
        type: String
    },
    hashtags: {
        type: [String]
    }

});

const Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;