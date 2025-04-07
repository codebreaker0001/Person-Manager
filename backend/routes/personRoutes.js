
import express from 'express'
import { Router } from 'express'
import Person from '../models/Person.js'



const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.json(people)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;
        const newPerson = new Person({ name, age, gender, mobileNumber });
        await newPerson.save();
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



router.put('/:id', async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;
        const updated = await Person.findByIdAndUpdate(
            req.params.id,
            { name, age, gender, mobileNumber },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id);
        res.json({ message: 'Person deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default router
