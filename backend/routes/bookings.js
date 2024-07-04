import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getAllUserBooking, getBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/', verifyUser, createBooking)

router.get('/:id', verifyUser, getBooking)

router.get('/', verifyAdmin, getAllBooking)

router.get('/user', verifyUser, getAllUserBooking)

export default router