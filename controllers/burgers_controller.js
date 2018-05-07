var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/api/burgers", function(req, res) {
burgers.insertOne([
    "burger_name","devoured"
], [
    req.body.burger_name, req.body.devoured
], function(result) {
    res.json({ id: result.insertId });
});
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.updateOne({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        console.log("put if statement");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;