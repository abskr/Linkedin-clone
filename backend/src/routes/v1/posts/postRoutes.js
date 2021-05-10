import express from "express";
import PostModel from "../../../database/mongoDB/models/PostModel.js";
import { asyncHandler } from "../../../core/asyncHandler.js";
import { NotFoundError, ForbiddenError } from "../../../core/apiErrors.js";
import { authGuard } from "../../../guard/authGuard.js";

const router = express.Router();

// @route  GET v1/posts
// @desc   Test route
// @access Public
router.get(
  "/",
  authGuard,
  asyncHandler(async (req, res, next) => {
    const post = await PostModel.find().populate('user', ['name', 'avatar']);
    if (!post) return next(new NotFoundError("No post yet!"));
    console.log(PostModel)
    res.status(200).send(post);
  })
);

// @route  POST v1/posts
// @desc   Test route
// @access Private
router.post(
  "/",
  authGuard,
  asyncHandler(async (req, res, next) => {
    const newPost = new PostModel(req.body)
    newPost.user = req.user.id
    const {_id} = await newPost.save()
    res.status(200).send(newPost);
  })
);

// @route  PUT v1/posts/:id
// @desc   Test route
// @access Private
router.put(
  "/:id",
  authGuard,
  asyncHandler(async (req, res, next) => {
    
    const {id} = req.user
    
    const post = await PostModel.findById(req.params.id)

    if (!post) {
      if (post.user !== id) {
        return next(new ForbiddenError("Ya ain't allowed to do that!"))
      }
      return next(new NotFoundError('Post not found!'))
    }
    
    const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
      })
    res.status(200).send(updatedPost)
  })
);

router.delete(
  "/:id",
  authGuard,
  asyncHandler(async (req, res, next) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
      if (post.user !== id) {
        return next(new ForbiddenError("Ya ain't allowed to do that!"))
      }
      return next(new NotFoundError('Post not found!'))
    }

    const removedPost = await PostModel.findByIdAndDelete(req.params.id)
    res.status(200).send('deleted!');
  })
);




export default router;