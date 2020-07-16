const jwt = require("jsonwebtoken");
const Config = require("../config/Config");

module.exports = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).send("No token provided.");

  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, Config.SECRET, (err, decoded) => {
    if (err)
      return res.status(401).send(err);

    req.username = decoded.username;
    next();
  });
};
