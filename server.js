const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();
const usersRoute = require('./routes/api/users');

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use('/api/users', usersRoute);
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

// Import the notes controller
const notesController = require('./controllers/api/notes');

// Route for creating notes
app.post('/api/notes', notesController.create);
app.get('/api/notes', notesController.getAll);


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
