import asyncHandler from 'express-async-handler'
import Booking from '../models/bookingModel.js'

const bookingDetails= asyncHandler(async (req, res) => {
    const {
        bookingId,
        date,
        time
    } = req.body
  
      const bookingData = new Booking({
        bookingId,
        user: req.user._id,
        date,
        time,
      })
  
      const createBooking = await bookingData.save()
  
      res.status(201).json(createBooking)
})

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
  res.json(bookings)
})





export  {bookingDetails,getMyBookings}

