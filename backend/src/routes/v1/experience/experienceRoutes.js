import express from 'express'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { BadRequestError, NotFoundError } from '../../../core/apiErrors.js'
import { authGuard } from '../../../guard/authGuard.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'

const router = express.Router()

// @route  POST v1/experiences
// @desc   Get all experiences
// @access Public
router.get(
  '/',
  authGuard,
  asyncHandler(async (req, res, next) => {
    console.log('profiles hit')
    const profiles = await ProfileModel.find()
    if (!profiles) return next(new NotFoundError('No profiles found!'))

    res.status(200).send(profiles)
  })
)

// @route  POST v1/profiles/id/:id
// @desc   Get profile by ID
// @access Private
router.get(
  '/:expId',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findById(id)

    if (!profile) return next(new NotFoundError('Experience not found'))

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
    const resp = await ProfileModel.updateOne(
      { user: req.user.id },
      {
        $push: { experience: req.body },
      },
      { runValidators: true, new: true }
    )

    if (!resp.ok)
      return next(new BadRequestError('Add experience unsuccessful'))

    res.status(201).send(resp)
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

export default router