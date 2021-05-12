import express from 'express'
import authRoutes from './auth/authRoutes.js'
import userRoutes from './users/userRoutes.js'
import postsRoutes from './posts/postRoutes.js'
import profileRoutes from './profile/profileRoutes.js'
import experienceRoutes from './experience/experienceRoutes.js'

const router = express.Router()

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
/*-------------------------------------------------------------------------*/

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/posts', postsRoutes)
router.use('/profiles', profileRoutes)
router.use('/experiences', experienceRoutes)

export default router