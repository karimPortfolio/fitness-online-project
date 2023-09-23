
const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const authentication = require("../middlewares/authentication")

usersRouter.get("/register", usersController.renderRegister);
usersRouter.post("/register", usersController.register);
usersRouter.get("/login", usersController.renderLogin);
usersRouter.post("/login", usersController.login);
usersRouter.get("/logout", usersController.logout);
usersRouter.get("/dashboard", authentication.Auth,usersController.dashboard);


module.exports = usersRouter;
