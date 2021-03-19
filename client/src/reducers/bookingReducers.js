import {USER_BOOKING_REQUEST,USER_BOOKING_SUCCESS,USER_BOOKING_FAIL,
LIST_MY_BOOKING_REQUEST,LIST_MY_BOOKING_SUCCESS,LIST_MY_BOOKING_FAIL,
USERS_BOOKING_FAIL,USERS_BOOKING_REQUEST,USERS_BOOKING_SUCCESS} from '../constants/bookingConstants'

export const userBookingReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_BOOKING_REQUEST:
        return { loading: true }
      case USER_BOOKING_SUCCESS:
        return { loading: false, bookingInfo: action.payload }
      case USER_BOOKING_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const bookingListMyReducer = (state = { }, action) => {
    switch (action.type) {
      case LIST_MY_BOOKING_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case LIST_MY_BOOKING_SUCCESS:
        return {
          loading: false,
          bookingList: action.payload,
        }
      case LIST_MY_BOOKING_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
     
      default:
        return state
    }
  }


  export const usersBookingReducer = (state = { }, action) => {
    switch (action.type) {
      case USERS_BOOKING_REQUEST:
        return {
          loading: true,
        }
      case USERS_BOOKING_SUCCESS:
        return {
          loading: false,
          usersBookingList: action.payload,
        }
      case USERS_BOOKING_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
     
      default:
        return state
    }
  }