const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const dbController = require('./controllers/dbController.js')
const foodpairingController = require('./controllers/foodpairingController.js');
const recipesController = require('./controllers/recipesController.js');
const cameraController = require('./controllers/cameraController.js');

// connect to local database
// mongoose.connect('mongodb://localhost/snacktimetest');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/foodPairing', foodpairingController.getFoodpairing);
app.post('/recipeList', recipesController.getRecipeList);
app.post('/recipeSelector', recipesController.getRecipe);
app.post('/imageRecognition', cameraController.imageRecognition);

// find user in db and send back to cilent
app.get('/database', function(req, res){
  dbController.findUserId(req.query.ID, function(err, data) {
    if(err) {
  		console.log(err);
  	}
  console.log('server sending back data', data)
  res.send(data);
  })
});

// created a new user because no user is find
app.post('/database', function(req, res){
  var newUser = {
    'name': 'testing',
    'FacebookUserID': req.body.id,
    'InstagramToken': [],
    'FavoriteRecipe': [],
  }
  dbController.insertNewUser(newUser, function(err, data){
    if(err) {
      console.log(err);
    }
    console.log('server created user', data)
    res.send(data)
  })
});


module.exports = app;
