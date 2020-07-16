const Week = require("../models/Week");

exports.findAll = (req, res) => {
  Week.findAll(req.params.username, (err, weeks) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving all weeks.");

    res.send(weeks);
  });
};

exports.find = (req, res) => {
  Week.find(req.params.username, req.params.date, (err, week) => {
    if (err)
      return res.status(500).send("Something went wrong while retrieving week.");
    if (!week)
      return res.status(404).send("No week for that date.")

    res.send(week);
  });
};
