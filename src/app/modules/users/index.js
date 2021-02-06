const express = require("express");
const routes = express.Router();

const HANDLERS = {
  findOne: require("./handlers/findOne"),
  create: require("./handlers/create"),
};

const verifyAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization === "ADMIN") {
    return next();
  }

  res.status(403).json({
    error: true,
    message: "Não é admin",
  });
};

routes.get("/:id", verifyAuth, HANDLERS.findOne);
routes.post("/", HANDLERS.create);

module.exports = routes;
