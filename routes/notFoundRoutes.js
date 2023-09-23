
const express = require("express");
const notFoundRoute = express.Router();

notFoundRoute.get("/*", (req, res) => {
    res.render("pages/notFound");
})

module.exports = notFoundRoute;
