// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    year: Number,
    genre: String
});

module.exports = mongoose.model('Person', personSchema);
