import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Admin from '../models/adminModel.js'
import Booking from '../models/bookingModel.js'
import User from '../models/userModel.js'


const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token: generateToken(admin._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


const signupAdmin = asyncHandler(async (req, res) => {
  const { email, password,authKey } = req.body

  const adminExists = await Admin.findOne({ email })

  if (adminExists) {
    res.status(400)
    throw new Error('Admin already exists')
  }

  if(authKey!=='secret'){
    res.status(400)
    throw new Error('Enter the correct auth key')
  }

  const admin = await Admin.create({
    email,
    password,
  })

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token: generateToken(admin._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid admin data')
  }
})

const getUsersBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ })
  res.json(bookings)
  
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await bookings.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
    authAdmin,
    signupAdmin,
    getUsersBookings,
    getUserProfile
  }