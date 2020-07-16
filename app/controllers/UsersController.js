const User = require("../models/User");

exports.findAll = (req, res) => {
  User.findAll((err, users) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving all users.");

    res.send(users);
  });
};

exports.find = (req, res) => {
  User.find(req.params.username, (err, user) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving user.");
    if (!user)
      return res.status(404).send("User not found.");

    res.send(user);
  });
};

exports.update = (req, res) => {
  if (req.params.username !== req.username)
    return res.status(401).send("Unauthorized operation.");

  User.update(req.params.username, req.body, (err, user) => {
    if (err)
      return res.status(500).send("Something went wrong while updating user.");
    if (!user)
      return res.status(400).send("User not updated");

    res.send(user);
  });
};

exports.delete = (req, res) => {
  if (req.params.username !== req.username)
    return res.status(401).send("Unauthorized operation.");

  User.delete(req.params.username, (err, _) => {
    if (err)
      return res.status(500).send("Something went wrong while deleting user");

    res.end();
  });
};
