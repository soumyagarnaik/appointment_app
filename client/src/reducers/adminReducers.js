import {ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAIL,ADMIN_LOGOUT,
    ADMIN_SIGNUP_REQUEST,ADMIN_SIGNUP_SUCCESS,ADMIN_SIGNUP_FAIL,
    } from '../constants/adminConstants'
    
    export const adminLoginReducer = (state = {}, action) => {
        switch (action.type) {
          case ADMIN_LOGIN_REQUEST:
            return { loading: true }
          case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }
          case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
          case ADMIN_LOGOUT:
            return {}
          default:
            return state
        }
      }
    
      export const adminSignupReducer = (state = {}, action) => {
        switch (action.type) {
          case ADMIN_SIGNUP_REQUEST:
            return { loading: true }
          case ADMIN_SIGNUP_SUCCESS:
            return { loading: false, adminInfo: action.payload }
          case ADMIN_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
          case ADMIN_LOGOUT:
            return {}
          default:
            return state
        }
      }