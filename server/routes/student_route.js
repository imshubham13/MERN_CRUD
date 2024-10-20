const express = require("express");
const router = express.Router();
const signupinfo = require("../models/student_model");

// INSERT DATA
router.post("/signup", async (req, res) => {
  const signupentry = new signupinfo({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
  });
  signupentry.save();
});

//Display All Data
router.get("/dispStudent", async (req, res) => {
  const data = await signupinfo.find();
  res.json(data);
});

// GET DATA by ID
router.get("/getOneStudent/:id", async (req, res) => {
  try {
    const data = await signupinfo.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// UPDATE DATA
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const option = { new: true };
    const result = await signupinfo.findByIdAndUpdate(id, updateData, option);
    res.send(result);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//DELETE DATA
router.delete("/delete/:id", async (req, res) => {
  try {
    // const id = req.params.id
    const data = await signupinfo.findByIdAndDelete(req.params.id);
    res.send(`Student Data has been deleted =========> ${id}`);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
