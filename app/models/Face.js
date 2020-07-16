const sql = require("../helpers/db.js");

// Constructor:
const Face = function(face) {
  this.skin_color = face.skin_color;
  this.hair       = face.hair;
  this.hair_color = face.hair_color;
  this.eyes       = face.eyes;
  this.eyes_color = face.eyes_color;
  this.nose       = face.nose;
  this.mouth      = face.mouth;
};


Face.create = (face, result) => {
  sql.query(`INSERT INTO faces VALUES ()`, face, (err, res) => {
    if (err)
      return result(err, null);

    console.log(`Face ${res.insertId} successfully created. `);
    result(null, res.insertId);
  });
};


Face.find = (username, result) => {
  sql.query(`SELECT f.* FROM faces f JOIN users u ON f.id = u.face_id WHERE u.username = lower(?)`, username, (err, res) => {
    if (err)
      return result(err, null);

    result(null, res[0]);
  });
};


Face.update = (username, face, result) => {
  sql.query(`SELECT face_id FROM users WHERE username = lower(?)`, username, (err, res) => {
    if (err)
      return result(err, null);
    if (!res)
      return result(null, null);

    sql.query(`UPDATE faces SET ? WHERE id = ?`, [face, res[0].face_id], (err, res) => {
      if (err)
        return result(err, null);
      if (!res.affectedRows)
        return result(null, null);

      result(null, face);
    });
  });
}

module.exports = Face;
