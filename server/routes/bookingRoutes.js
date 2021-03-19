import express from 'express'
const router = express.Router()
import {bookingDetails,getMyBookings} from '../controllers/bookingController.js'
import { protect,admin} from '../middleware/authMiddleware.js'

router.route('/').post(protect, bookingDetails)
router.route('/').get(protect,getMyBookings)


export default router
