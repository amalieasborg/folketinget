// controllers/filmController.js
const Person = require('../models/person');

// Tilføjer en ny person
exports.createPerson = async (req, res) => {
    try {
        const newPerson = new Person({
            navn: req.body.navn,
            parti: req.body.parti,
            position: req.body.position,
            startdato: req.body.startdato
        });
        await newPerson.save();
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved tilføjelse af person:", err);
        res.status(500).send("Fejl ved tilføjelse af person.");
    }
};

// Henter alle personer og viser dem
exports.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.render('index', { films: persons });
    } catch (err) {
        console.error("Fejl ved hentning af person:", err);
        res.status(500).send("Fejl ved hentning af person.");
    }
};

// Opdaterer en person
exports.updatePerson = async (req, res) => {
    try {
        await Person.findByIdAndUpdate(req.params.id, {
            navn: req.body.navn,
            parti: req.body.parti,
            position: req.body.position,
            startdato: req.body.startdato
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af person:", err);
        res.status(500).send("Fejl ved opdatering af person.");
    }
};

// Sletter en person
exports.deletePerson = async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af person:", err);
        res.status(500).send("Fejl ved sletning af person.");
    }
};
