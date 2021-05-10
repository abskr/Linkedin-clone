import express from "express";
import { asyncHandler } from "../../../core/asyncHandler.js";
import { NotFoundError } from "../../../core/apiErrors.js";

const router = express.Router();

// @route  GET v1/posts
// @desc   Test route
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const post = { message: "posts route" };
    if (!post) return next(new NotFoundError("Posts not found"));

    res.status(200).send(post);
  })
);

export default router;