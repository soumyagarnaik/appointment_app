import {ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAIL,ADMIN_LOGOUT,
    ADMIN_SIGNUP_REQUEST,ADMIN_SIGNUP_SUCCESS,ADMIN_SIGNUP_FAIL} from '../constants/adminConstants'
    
import axios from  'axios'

export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:ADMIN_LOGIN_REQUEST
        })

        const config={
            headers: {
                'Content-Type': 'application/json',
              },
        }

        const {data}=await axios.post('/api/admin/login',{email,password},config)

        dispatch({
            type:ADMIN_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('adminInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const adminlogout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')
    dispatch({ type: ADMIN_LOGOUT })
  }

  export const signup = (email, password,authKey) => async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_SIGNUP_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        '/api/admin',
        { email, password,authKey },
        config
      )
  
      dispatch({
        type: ADMIN_SIGNUP_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: ADMIN_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


