const express = require("express");
const User = require("../models/User");

const router = express.Router();

//Crear a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.status(201).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;