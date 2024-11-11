// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    navn: { type: String, required: true },
    parti: String,
    position: String,
    startdato: Number
});

module.exports = mongoose.model('Person', personSchema);
