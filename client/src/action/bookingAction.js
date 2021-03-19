import {USER_BOOKING_REQUEST,USER_BOOKING_SUCCESS,USER_BOOKING_FAIL,
  LIST_MY_BOOKING_REQUEST,LIST_MY_BOOKING_SUCCESS,LIST_MY_BOOKING_FAIL,
  USERS_BOOKING_FAIL,USERS_BOOKING_REQUEST,USERS_BOOKING_SUCCESS} from '../constants/bookingConstants'

import axios from  'axios'

export const booking = (bookingId,date,time) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_BOOKING_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/mybooking`, {bookingId,date,time}, config)
  
      dispatch({
        type: USER_BOOKING_SUCCESS,
        payload: data,
      })

      localStorage.setItem('bookingInfo', JSON.stringify(data))
      
    } catch (error) {
    
      dispatch({
        type: USER_BOOKING_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
    }
  }

  export const listMyBookings = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: LIST_MY_BOOKING_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/mybooking`, config)
  
      dispatch({
        type: LIST_MY_BOOKING_SUCCESS,
        payload: data,
      })
     
      localStorage.setItem('bookingList', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: LIST_MY_BOOKING_FAIL,
        payload:  error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      })
    }
  }

  export const listUsersBookings = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: USERS_BOOKING_REQUEST,
      })
  
      const {
        adminLogin: { adminInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/admin/usersbooking`, config)
  
      dispatch({
        type: USERS_BOOKING_SUCCESS,
        payload: data,
      })
     
      localStorage.setItem('usersBookingList', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USERS_BOOKING_FAIL,
        payload:  error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      })
    }
  }