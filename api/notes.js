const express = require('express');
const router = express.Router();
const Note = require('../../models/note');

router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await Note.create({ title, content });
        res.status(201).json(newNote); // Use res.json() to send the JSON response
      } catch (error) {
        res.status(500).json({ message: 'Failed to create a new note.' });
      }
    });

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notes.' });
  }
});

module.exports = router;
