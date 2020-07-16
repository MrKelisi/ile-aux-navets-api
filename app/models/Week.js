const sql = require("../helpers/db.js");

// Constructor:
const Week = function(week) {
  this.username = week.username;
  this.date_achat = week.date_achat;
  this.sun_am = week.sun_am;
  this.sun_pm = week.sun_pm;
  this.mon_am = week.mon_am;
  this.mon_pm = week.mon_pm;
  this.tue_am = week.tue_am;
  this.tue_pm = week.tue_pm;
  this.wed_am = week.wed_am;
  this.wed_pm = week.wed_pm;
  this.thu_am = week.thu_am;
  this.thu_pm = week.thu_pm;
  this.fri_am = week.fri_am;
  this.fri_pm = week.fri_pm;
  this.sat_am = week.sat_am;
  this.sat_pm = week.sat_pm;
};


Week.findAll = (username, result) => {
  sql.query("SELECT * FROM turnips WHERE username = ?", username, (err, res) => {
    if (err)
      return result(err, null);

    result(null, res);
  });
};


Week.find = (username, date, result) => {
  sql.query("SELECT * FROM turnips WHERE username = ? AND date_achat = ?", [username, date], (err, res) => {
    if (err)
      return result(err, null);

    result(null, res[0]);
  });
};

module.exports = Week;
