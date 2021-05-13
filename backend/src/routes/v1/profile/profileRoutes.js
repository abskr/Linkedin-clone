import express from 'express'
import mongoose from 'mongoose'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { NotFoundError } from '../../../core/apiErrors.js'
import { authGuard } from '../../../guard/authGuard.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'
import UserModel from '../../../database/mongoDB/models/UserModel.js'
import { checkSchema } from 'express-validator'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { generatePdf } from '../../../services/pdf/index.js'
const router = express.Router()
const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'strive',
  },
})
const cloudMulter = multer({ storage: cloudStorage })

// @route  POST v1/profiles
// @desc   Get all profiles
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const profiles = await ProfileModel.find()
    if (!profiles) return next(new NotFoundError('No profiles found!'))

    res.status(200).send(profiles)
  })
)

// @route  POST v1/profiles/me
// @desc   Get profile by ID
// @access Private
router.get(
  '/me',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const id = req.user.id
    const profile = await ProfileModel.findOne({
      user: mongoose.Types.ObjectId(id),
    }).populate({
      path: 'user',
      model: UserModel,
    })

    if (!profile)
      return next(new NotFoundError('No profile found for this ID!'))

    res.status(200).send(profile)
  })
)

// @route  POST v1/profiles
// @desc   Create Profile for Registered User
// @access Private
router.post(
  '/',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const newProfile = new ProfileModel(req.body)
    const { _id } = await newProfile.save()

    res.status(201).send(_id)
  })
)

// @route  POST v1/profiles/username/:username
// @desc   Get profile by username
// @access Public
router.get(
  '/:username',
  asyncHandler(async (req, res, next) => {
    console.log('username route', req.params)
    const profile = await ProfileModel.findOne({
      username: req.params.username,
    }).populate({
      path: 'user',
      model: UserModel,
    })

    if (!profile)
      return next(new NotFoundError('No profile found for this user'))

    res.status(200).send(profile)
  })
)

// @route  GET v1/profiles/id/:id
// @desc   Get profile by id
// @access Private
router.put(
  '/:id',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    )
    if (!profile)
      return next(new NotFoundError('No profile found for this ID!'))
    res.status(200).send(profile)
  })
)

router.delete(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findByIdAndDelete(req.params.id)
    if (!profile)
      return next(new NotFoundError('No profile found for this ID!'))
    res.status(200).send('deleted')
  })
)

router.get('/:id/exportPDF', async (req, res, next) => {
  try {
    await generatePdf({})
    res.send('PDF Generated')
  } catch (error) {
    next(error)
  }
})

export default router