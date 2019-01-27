const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create city Schema & Model
const citySchema = new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    }
});

const City = mongoose.model('cities', citySchema);

module.exports = City;