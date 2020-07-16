const Face = require("../models/Face");
const FaceGenerator = require("../helpers/facegenerator");
const headers = {'Content-Type': 'image/svg+xml; charset=UTF-8', 'Cache-Control': 'no-cache'};

exports.fromParams = (req, res) => {
  const svg = FaceGenerator.generateSVG(req.params);

  if (!svg)
    return res.status(400).send("Wrong parameters.");

  res.header(headers).send(svg);
}

exports.fromUsername = (req, res) => {
  Face.find(req.params.username, (err, face) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving face.");
    if (!face)
      return res.status(404).send("User not found.");

    const svg = FaceGenerator.generateSVG(face);

    if (!svg)
      return res.status(400).send("Wrong parameters.");

    res.header(headers).send(svg);
  });
}
