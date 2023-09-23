
const express = require("express");
const recipesRouter = express.Router();
const recipesController = require("../controllers/recipesController");


recipesRouter.get("/recipes", recipesController.recipes);
recipesRouter.get("/recipes/details/:id", recipesController.recipeDetails);


module.exports = recipesRouter;
