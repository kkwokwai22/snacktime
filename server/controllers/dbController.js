const mongoose = require('mongoose');
const UserModel = require('../../db/models/user');

mongoose.connect('mongodb://localhost/snacktimetest');

// var testingUser = {
//   'name': 'Jackie',
//   'FacebookUserID': '1294839823847982747239847298293',
//   'InstagramToken': ['testing'],
//   'FavoriteRecipe': ['chicken', 'soup', 'foodtruck'],
// }

// var testingUser = {
//   'name': 'joey',
//   'FacebookUserID': '123982792837927497',
//   'InstagramToken': ['testing'],
//   'FavoriteRecipe': ['chicken', 'soup', 'fish', 'duck'],
// }


// Find alluser
const findAllUser = (user) => {
  UserModel.find(function(err, user){
    if(err) {
      return err
    } else {
      console.log(user)
    }
  })
}

// Create user function
const insertNewUser= (user, callback) => {
  UserModel.create(user, callback);
}

// Find User with same id
const findUserId = (userid, callback) => {
  UserModel.find({FacebookUserID: userid}, callback);
}

// Add UserFavorRecipe
// const AddUserFavorRecipe = (userid, recipe) => {
//   UserModel.findOneAndUpdate({
//
//   })
// }

exports.insertNewUser = insertNewUser;
exports.findAllUser = findAllUser;
exports.findUserId = findUserId;

// insertNewUser(testingUser)
// findAllUser();
// AddUserFavorRecipe('12948398298293', 'duck with dumpling')
// findUserId('12948398298293')
