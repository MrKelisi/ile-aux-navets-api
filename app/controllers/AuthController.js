const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Config = require("../config/Config");
const Face = require("../models/Face");
const User = require("../models/User");

exports.login = (req, res) => {
  if (!req.body)
    return res.status(400).send("Request body cannot be empty.");

  User.authenticate(req.body.username, (err, user) => {
    if (err)
      return res.status(500).send("Something went wrong while logging you in.");
    if (!user || !bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).send("Wrong credentials.");

    let token = jwt.sign({username: user.username}, Config.SECRET, {
      expiresIn: 86400  // 24h
    });

    console.log(`Authentication successful for user '${user.username}'.`);
    res.send({username: user.username, token: token});
  });
};


exports.register = (req, res) => {
  if (!req.body)
    return res.status(400).send("Request body cannot be empty.");

  const newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 11),
    display_name: req.body.display_name
  });

  User.find(newUser.username, (err, user) => {
    if (err)
      return res.status(500).send("Something went wrong while registering you in.");
    if (user)
      return res.status(409).send(`User '${user.username}' already exists.`);

    Face.create(new Face({}), (err, insertId) => {
      if (err)
        return res.status(500).send("Something went wrong while registering you in.");

      newUser.face_id = insertId;
      User.create(newUser, (err, _) => {
        if (err)
          return res.status(500).send("Something went wrong while registering you in.");

        let token = jwt.sign({username: newUser.username}, Config.SECRET, {
          expiresIn: 86400  // 24h
        });

        res.send({username: newUser.username, token: token});
      });
    });
  });
};
