const mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  id: String,
  image: String,
  description: String
});

var RecipeModel = mongoose.model('RecipeModel', recipeSchema);

module.exports = RecipeModel;
