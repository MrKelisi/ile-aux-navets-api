const sql = require("../helpers/db.js");

// Constructor:
const User = function(user) {
  this.username     = user.username;
  this.password     = user.password;
  this.mail         = user.mail;
  this.display_name = user.display_name;
  this.island       = user.island;
  this.fruits       = user.fruits;
  this.face_id      = user.face_id;
};


User.create = (user, result) => {
  sql.query("INSERT INTO users SET ?", user, (err, res) => {
    if (err)
      return result(err, null);

    console.log(`User '${user.username}' successfully created.`);
    result(null, { id: res.insertId, ...user });
  });
};


User.authenticate = (username, result) => {
  sql.query("SELECT username, password FROM users WHERE username=?", username, (err, res) => {
    if (err)
      return result(err, null);

    result(null, res[0]);
  });
}


User.find = (username, result) => {
  sql.query("SELECT username, display_name, mail FROM users WHERE username = lower(?)", username, (err, res) => {
    if (err)
      return result(err, null);

    result(null, res[0]);
  });
};


User.findAll = (result) => {
  sql.query("SELECT username, display_name, mail FROM users", (err, res) => {
    if (err)
      return result(err, null);

    result(null, res);
  });
};


User.update = (username, user, result) => {
  result('not_implemented', null);
};


User.delete = (username, result) => {
  result('not_implemented', null);
};

module.exports = User;
