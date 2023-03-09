const express = require("express");
const router = express.Router();

// Controller
const {register, login, getCurrentUser} = require("../controllers/UserController.js");
const authGuard = require("../middlewares/authGuard");

//middlewares
const validate = require("../middlewares/handleValidation")
const {useCreateValidation, loginValidation} = require("../middlewares/userValidation")

// Routes
router.post("/register", useCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);


module.exports = router;