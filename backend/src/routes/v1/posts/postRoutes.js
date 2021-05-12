import express from "express";
import PostModel from "../../../database/mongoDB/models/PostModel.js";
import { checkSchema } from 'express-validator'
import { postValidator } from './postValidator.js'
import { validationHandler } from '../../../core/validationHandler.js'
import { asyncHandler } from "../../../core/asyncHandler.js";
import { NotFoundError, ForbiddenError } from "../../../core/apiErrors.js";
import { authGuard } from "../../../guard/authGuard.js";
import cloudinary from "../../../services/image/cloudinaryUpload.js"
import CloudinaryStorage from "multer-storage-cloudinary"
import multer from "multer"

const router = express.Router()

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "LinkedinPhotos",
//   },
// });

// const cloudinaryMulter = multer({
//   storage: storage
// });

// @route  GET v1/posts
// @desc   Test route
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const posts = await PostModel.find().populate('user', ['name','lastname','avatar'])
    if (!posts) return next(new NotFoundError('No post yet!'))
    //console.log(PostModel)
    res.status(200).send(posts)
  })
)

// @route  POST v1/posts
// @desc   Test route
// @access Private
router.post(
  '/',
  [authGuard, checkSchema(postValidator)],
  asyncHandler(async (req, res, next) => {
    validationHandler(req)

    const newPost = new PostModel(req.body)
    newPost.user = req.user.id
    const { _id } = await newPost.save()
    res.status(200).send(newPost)
  })
)

// router.post(
//   "/:id",
//   [authGuard, cloudinaryMulter.single("post")],
//   asyncHandler(async (req, res, next) => {
//     const post = await PostModel.findById(req.params.id)
//     if (!post) {
//       if (post.user !== req.user.id) {
//         return next(new ForbiddenError("Ya ain't allowed to do that!"))
//       }
//       return next(new NotFoundError('Post not found!'))
//     }
//     const image = req.file && req.file.path;
//     const updatePosts = await PostModel.findByIdAndUpdate(
//       req.params.id, {
//         $set: {
//           image
//         },
//       }, {
//         runValidators: true,
//         new: true,
//       }
//     );
//     res.status(201).json({
//       data: `Photo added to Post with ID ${id}`
//     })
//   })
// );

// @route  PUT v1/posts/:id
// @desc   Test route
// @access Private
router.put(
  '/:id',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const { id } = req.user

    const post = await PostModel.findById(req.params.id)

    if (!post) {
      if (post.user !== id) {
        return next(new ForbiddenError("Ya ain't allowed to do that!"))
      }
      return next(new NotFoundError('Post not found!'))
    }

    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    )
    res.status(200).send(updatedPost)
  })
)

// @route  DELETE v1/posts/:id
// @desc   Test route
// @access Private
router.delete(
  '/:id',
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
    res.status(200).send('deleted!')
  })
)

// @route  GET v1/posts/:id
// @desc   Test route
// @access Public
router.get(
  '/:id',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
      if (post.user !== id) {
        return next(new ForbiddenError("Ya ain't allowed to do that!"))
      }
      return next(new NotFoundError('Post not found!'))
    }
    res.status(200).send(post)
  })
)


export default router;