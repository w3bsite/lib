var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')


var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dbshahin:shahinpass@cluster0.xgkwj.mongodb.net/';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var authors = []
var genres = []
var books = []
var bookinstances = []

function authorCreate(first_name, family_name, d_birth, d_death, cb) {
  authordetail = {first_name:first_name , family_name: family_name };
 
  
  var author = new Author(authordetail);
  author.save(function (err) {
    if (err) {
      
      console.log (cb(err, null))
    }
    console.log('New Author: ' + author);
    authors.push(author);
    cb(null, author);
console.log(cb);
  }  );

       };
authorCreate('sami','fisheer','1971-12-16',false)