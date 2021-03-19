import express from 'express'
const router = express.Router()
import {
  authUser,
  signupUser,
  
} from '../controllers/userController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(signupUser)
router.route('/login').post( authUser)


export default router
