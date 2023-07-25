const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes'); // Updated import

// All paths start with '/api/notes'

// POST /api/notes (create a new note)
router.post('/', notesCtrl.create);
// GET /api/notes (get all notes)
router.get('/', notesCtrl.getAll);
// GET /api/notes/:id (get a specific note by ID)
router.get('/:id', notesCtrl.getById);
// PUT /api/notes/:id (update a specific note by ID)
router.put('/:id', notesCtrl.update);
// DELETE /api/notes/:id (delete a specific note by ID)
router.delete('/:id', notesCtrl.deleteById);

module.exports = router;
