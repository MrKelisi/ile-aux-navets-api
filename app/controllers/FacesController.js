const Face = require("../models/Face");

exports.find = (req, res) => {
  Face.find(req.params.username, (err, face) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving face.");
    if (!face)
      return res.status(404).send("User not found.");

    res.send(face);
  });
};

exports.update = (req, res) => {
  if (!req.body)
    return res.status(400).send("Request body cannot be empty.");
  if (req.params.username !== req.username)
    return res.status(401).send("Unauthorized operation.");

  Face.update(req.params.username, req.body, (err, face) => {
    if (err)
      return res.status(500).send("Something went wrong while updating face.");
    if (!face)
      return res.status(400).send("Face not updated.")

    res.send(face);
  });
};
