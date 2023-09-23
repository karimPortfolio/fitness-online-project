
const express = require("express");
const programRouter  = express.Router();
const programsController = require("../controllers/programsController");
const authentication = require("../middlewares/authentication");

programRouter.get("/programs", programsController.programs);
programRouter.get("/programs/details/:id", programsController.programDetails);
programRouter.get("/programs/join/:id", authentication.Auth, programsController.join);
programRouter.get("/programs/quit/:id", authentication.Auth, programsController.quitProgram); 

module.exports = programRouter;
