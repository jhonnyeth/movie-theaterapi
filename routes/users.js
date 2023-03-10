const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(fruits);
});

router.get("/:id", (req, res) => {
  const fruit = fruits[req.params.id - 1];
  res.json(fruit);
});

module.exports = router;
