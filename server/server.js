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

// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});



app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


app.post('/submission', serverHelpers.createSubmission);
app.post('/modal_click', serverHelpers.registerModalClick);
app.post('/register_view', serverHelpers.registerPageView);


const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/dusato';
console.log('mongoURL: ', mongoURL)
mongoose.connect(mongoURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected to mongo')
});

let port = process.env.PORT;

if (port === undefined) {
  port = 3000;
}

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});



