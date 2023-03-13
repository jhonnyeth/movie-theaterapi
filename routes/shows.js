const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { User } = require("./users");
const { Show } = require("./shows");
Show.belongsTo(User);
User.hasMany(Show);

router.get("/", async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

router.get("/:id", async (req, res) => {
  const show = await Show.findByPk(req.params.id); //[req.params.id - 1];
  res.json(show);
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Show.destroy({
      where: { id },
    });
    const foundShow = await Show.findByPk(id);
    if (!foundShow) {
      res.status(200).send("Show was deleted successfully");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Cannot delete show");
  }
});

module.exports = router;
