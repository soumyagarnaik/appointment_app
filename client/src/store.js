import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer,userSignupReducer,userDetailsReducer} from './reducers/userReducers'
import { userBookingReducer,bookingListMyReducer,usersBookingReducer } from './reducers/bookingReducers'
import {adminLoginReducer,adminSignupReducer} from './reducers/adminReducers'

const reducer=combineReducers({
    userLogin:userLoginReducer,
    adminLogin:adminLoginReducer,
    userSignup:userSignupReducer,
    adminSignup:adminSignupReducer,
    userDetails:userDetailsReducer,
    bookingDetails:userBookingReducer,
    myBookings:bookingListMyReducer,
    usersBookings:usersBookingReducer


})



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


  const adminInfoFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null


  const bookingInfoFromStorage = localStorage.getItem('bookingInfo')
  ? JSON.parse(localStorage.getItem('bookingInfo'))
  : null

  const bookingListFromStorage = localStorage.getItem('bookingList')
  ? JSON.parse(localStorage.getItem('bookingList'))
  : null

  const usersBookingListFromStorage = localStorage.getItem('usersBookingList')
  ? JSON.parse(localStorage.getItem('usersBookingList'))
  : null


  const initialState={
    userLogin: { userInfo: userInfoFromStorage },
    adminLogin:{adminInfo:adminInfoFromStorage},
    bookingDetails:{bookingInfo:bookingInfoFromStorage},
    myBookings:{bookingList:bookingListFromStorage},
    usersBookings:{usersBookingList:usersBookingListFromStorage}
   
}

const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store