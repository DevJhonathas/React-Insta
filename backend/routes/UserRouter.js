const express = require("express");
const router = express.Router();

// Controller
const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController.js");
const authGuard = require("../middlewares/authGuard");

//middlewares
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload.js");
const {useCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/userValidation")

// Routes
router.post("/register", useCreateValidation(), validate, register);
router.get("/profile", authGuard, getCurrentUser);
router.post("/login", loginValidation(), validate, login);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
router.get("/:id", getUserById);

module.exports = router;