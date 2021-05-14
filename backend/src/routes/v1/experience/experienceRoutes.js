import express from 'express'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { BadRequestError, NotFoundError } from '../../../core/apiErrors.js'
import { authGuard } from '../../../guard/authGuard.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'
import mongoose from 'mongoose'

const router = express.Router()

// TODO: Picture upload
// TODO: Put Update

// @route  POST v1/experiences
// @desc   Get all experiences
// @access Public
router.get(
  '/',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const id = req.user.id
    const { experience } = await ProfileModel.findOne({
      user: mongoose.Types.ObjectId(id),
    })

    if (!experience) return next(new NotFoundError('No profiles found!'))

    res.status(200).send(experience)
  })
)

// @route  POST v1/profiles/id/:id
// @desc   Get profile by ID
// @access Private
router.get(
  '/:expId',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const profile = await ProfileModel.findOne(
      { user: req.user.id },
      {
        experience: {
          $elemMatch: { _id: mongoose.Types.ObjectId(req.params.expId) },
        },
      }
    )

    if (!profile) return next(new NotFoundError('Experience not found'))

    res.status(200).send(profile)
  })
)

// @route  POST v1/experience
// @desc   Create experience for authed User
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

// @route  PUT v1/experience/:expId
// @desc   Update experience by id
// @access Private
router.put(
  '/:expId',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const id = req.user.id
    console.log(id)
    const exp = await ProfileModel.findOne(
      { user: req.user.id },
      {
        experience: {
          $elemMatch: { _id: mongoose.Types.ObjectId(req.params.expId) },
        },
      }
    )

    const profile = await ProfileModel.updateOne(
      {
        user: id,
        'experience._id': req.params.expId,
      },
      {
        $set: {
          'experience.$': {
            ...req.body,
            _id: req.params.expId,
          },
        },
      }
    )
    if (!profile)
      return next(new NotFoundError('No profile found for this ID!'))
    res.status(200).send(profile)
  })
)

router.delete(
  '/:expId',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const result = await ProfileModel.updateOne(
      { user: req.user.id },
      {
        $pull: {
          experience: { _id: mongoose.Types.ObjectId(req.params.expId) },
        },
      },
      { runValidators: true, new: true }
    )
    if (!result) return next(new BadRequestError('Error deleting experience'))
    res.status(200).send('deleted')
  })
)

export default router