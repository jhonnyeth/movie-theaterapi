const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { User } = require("./users");
const { Show } = require("./shows");
Show.belongsTo(User);
User.hasMany(Show);

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id); //[req.params.id - 1]//
  res.json(user);
});

router.get("/:id/shows", async (req, res) => {
  try {
    const id = req.params.id;
    const shows = await Show.findAll({
      where: {
        UserId: id,
      },
    });
    res.json(shows);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error cannot get shows`);
  }
});

module.exports = router;
