import express from "express";
import PostModel from "../../../database/mongoDB/models/PostModel.js";
import { checkSchema } from 'express-validator'
import { postValidator } from './postValidator.js'
import { validationHandler } from '../../../core/validationHandler.js'
import { asyncHandler } from "../../../core/asyncHandler.js";
import { NotFoundError, ForbiddenError } from "../../../core/apiErrors.js";
import { authGuard } from "../../../guard/authGuard.js";
import cloudinary from "../../../services/image/cloudinaryUpload.js"
//import { v2 as cloudinary } from "cloudinary"
import {CloudinaryStorage} from "multer-storage-cloudinary"
import multer from "multer"
import q2m from 'query-to-mongo'
const router = express.Router()

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "linkedinPhotos",
  },
})
const cloudMulter = multer({
  storage: cloudStorage
})

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
  [authGuard,cloudMulter.single("post"), checkSchema(postValidator)],
  asyncHandler(async (req, res, next) => {
    validationHandler(req)
    //console.log(req.body.text, req.file)
    req.body.user = req.user.id
    // req.body.image = req.file.path
      const newPost = new PostModel({text:req.body.text, image:req.file.path, user: req.body.user})
    const { _id } = await newPost.save()
    res.status(200).send(`${_id} is saved`)
   
  })
)

router.post(
  "/:id/upload",
  [authGuard, cloudMulter.single("post")],
  asyncHandler(async (req, res, next) => {
    const post = await PostModel.findById(req.params.id)
    if (!post) {
      if (post.user !== req.user.id) {
        return next(new ForbiddenError("Ya ain't allowed to do that!"))
      }
      return next(new NotFoundError('Post not found!'))
    }
    const image = req.file && req.file.path;
    const updatePosts = await PostModel.findByIdAndUpdate(
      req.params.id, {
        $set: {
          image
        },
      }, {
        runValidators: true,
        new: true,
      }
    );
    console.log(updatePosts)
    res.status(201).json({
      data: `Photo added!`
    })
  })
);

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