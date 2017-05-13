const mongoose = require('mongoose');

const pageViewSchema = mongoose.Schema({
  created: Object,
  screenWidth: Number,
  screenHeight: Number,
  city: String,
  state: String,
  country: String
});

const PageViews = mongoose.model('PageViews', pageViewSchema);

module.exports = PageViews;