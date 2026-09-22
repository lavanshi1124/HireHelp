const express = require("express");
const authRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware")

const authController = require("../controllers/auth.controller");

authRouter.post("/register",authController.registerUserController);

authRouter.post("/login", authController.loginUserController);

authRouter.get("/logout", authController.logoutUserController);

authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);

module.exports = authRouter;