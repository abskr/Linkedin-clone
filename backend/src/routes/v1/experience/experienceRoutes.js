import express from 'express'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { NotFoundError } from '../../../core/apiErrors.js'
import { authGuard } from '../../../guard/authGuard.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'

const router = express.Router()

router.get(
  '/experiences',
  authGuard,
  asyncHandler(async (req, res, next) => {
    const experiences = await ProfileModel.findById(req.user.id)

    if (!experiences) return next(new NotFoundError('Users not found'))

    res.status(200).send(experiences)
  })
)

export default router