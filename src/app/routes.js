module.exports = (app) => {
  app.use("/users", require("./modules/users"));
};
