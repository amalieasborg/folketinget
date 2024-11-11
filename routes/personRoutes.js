const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const personController = require('../controllers/personController');

// Route til visning af formularen for ny person
router.get('/new', (req, res) => {
    res.render('new');  // Render new.ejs
});

// Route to render form for editing an existing film
router.get('/person/:id/update', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        res.render('edit', { person: person });
    } catch (err) {
        console.error("Fejl ved hentning af person:", err);
        res.status(500).send("Fejl ved hentning af person.");
    }
});

router.get('/', personController.getAllPersons);
router.post('/person', personController.createPerson);
router.post('/person/:id/update', personController.updatePerson);
router.post('/person/:id/delete', personController.deletePerson);

module.exports = router
