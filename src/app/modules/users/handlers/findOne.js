const users = require("../../../../database/");

module.exports = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    res.status(404).json({
      error: true,
      message: "Not user",
    });
  }

  res.status(200).json(user);
};
