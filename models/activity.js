const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create activity Schema & Model
const activitySchema = new Schema({
    itinerary_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String
    },
    activity: {
        type: String
    },
    activityPic: {
        type: String
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId
    }

});

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;