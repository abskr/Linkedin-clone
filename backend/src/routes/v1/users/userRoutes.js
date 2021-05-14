import express from 'express'
import bcrypt from 'bcryptjs'
import gravatar from 'gravatar'
import jwt from 'jsonwebtoken'
import { checkSchema } from 'express-validator'
import { usersPostValidator } from './userValidator.js'
import { asyncHandler } from '../../../core/asyncHandler.js'
import { BadRequestError, NotFoundError } from '../../../core/apiErrors.js'
import { validationHandler } from '../../../core/validationHandler.js'
import { jwtSecret } from '../../../config.js'
import { nanoid } from 'nanoid'

import UserModel from '../../../database/mongoDB/models/UserModel.js'
import ProfileModel from '../../../database/mongoDB/models/ProfileModel.js'

const router = express.Router()

// @route  GET v1/users
// @desc   Returns all users
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const users = await UserModel.find()
    if (!users) return next(new NotFoundError('Users not found'))

    res.status(200).send(users)
  })
)

// @route  POST v1/users
// @desc   Register/create new user
// @access Public
router.post(
  '/',
  // checkSchema(usersPostValidator),
  asyncHandler(async (req, res, next) => {
    // validationHandler(req)

    const { name, lastname, email, password } = req.body

    console.log(req.body)

    let user = await UserModel.findOne({ email })
    console.log('User is ' + user)

    console.log(Boolean(user))

    if (user) {
      // null is truthy???
      console.log('here')
      return next(new BadRequestError('User already exists'))
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    })

    user = await new UserModel({
      name,
      lastname,
      email,
      avatar,
      password,
    })

    // hash password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    // save new user to db
    console.log(user)
    await user.save()

    const username = `${user.name}${user.lastname}${nanoid(10)}`
    console.log({ username })
    // create & save new profile from new user data
    const profile = await new ProfileModel({
      user: user._id,
      username,
    })

    await profile.save()

    const payload = {
      user: {
        id: user._id,
      },
    }

    // jwt sign and return token & user object in response to client
    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err
      res.status(201).send({ token, user })
    })
  })
)

export default router