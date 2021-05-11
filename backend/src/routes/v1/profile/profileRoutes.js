import express from 'express'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { NotFoundError } from '../../../core/apiErrors.js'
import { authGuard } from '../../../guard/authGuard.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'
import { checkSchema } from 'express-validator'

const router = express.Router()

// @route  GET v1/profile/me
// @desc   Get current users profile
// @access Private
router.get(
  '/me',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findById(req.user.id).populate('user', [
      'name',
      'avatar',
    ])

    if (!profile) return next(new NotFoundError('No profile found for user'))

    res.status(200).send(profile)
  })
)

router.get(
  '/:username',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findOne({
      username: req.params.username,
    })
      .populate('user', ['name', 'avatar', 'username'])
      .find()

    if (!profile)
      return next(new NotFoundError('No profile found for this user'))

    res.status(200).send(profile)
  })
)
router.get(
  '/profiles',
  asyncHandler(async (req, res, next) => {
    const profiles = await ProfileModel.find()
    if (!profiles) return next(new NotFoundError('No profiles found!'))

    res.status(200).send(profiles)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const profile = await ProfileModel.findById(id)
    if (!profile)
      return next(new NotFoundError('No profile found for this ID!'))
    res.status(200).send(profile)
  })
)

// @route  POST v1/profile
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

export default router