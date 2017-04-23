const path = require('path');
const http = require('http');

const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const errorHandler = require('errorhandler');




// const bodyParser = require('body-parser')
const serverHelpers = require('./serverHelpers')
const app = express();
const Submission = require('../db/submissionModel.js');
app.use(express.static('../build'));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));


app.post('/submission', serverHelpers.createSubmission);
// app.post('/submission', (req, res) => {
//   console.log('req.body: ', req.body)
//   res.status(200).send("Server response: submission post")
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dusato');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected to mongo')
});


app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});