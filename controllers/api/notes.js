const Note = require('../../models/note');

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};

async function create(req, res) {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a new note.' });
  }
}

async function getAll(req, res) {
  try {
    const notes = await Note.find({ user: req.user });
    console.log(notes)
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes.' });
  }
}

async function getById(req, res) {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the note.' });
  }
}

async function update(req, res) {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the note.' });
  }
}

async function deleteById(req, res) {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the note.' });
  }
}
