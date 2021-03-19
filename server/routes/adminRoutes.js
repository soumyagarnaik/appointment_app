import express from 'express'
const router = express.Router()
import {
  authAdmin,
  signupAdmin,
  getUsersBookings,
  getUserProfile,
  
} from '../controllers/adminController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(signupAdmin)
router.route('/login').post(authAdmin)
router.route('/usersbooking').get(getUsersBookings)
router.route('/usersdetails').get(getUserProfile)


export default router
