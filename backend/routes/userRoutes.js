import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updatedUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js ";

router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updatedUserProfile);

export default router;
