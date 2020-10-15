import http from '../../services/httpService'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import loginWithJwt from '../../services/authService'
import * as Types from '../../store/actions/type'

export const register = (user, history) => dispatch => {
    http.post('/auth/signup', user)
    .then( (response) => {
        let token = response.data.jwtToken;
        localStorage.setItem('auth_token',token);
        // http.setAuthToken(token);
        let decode = jwtDecode(token)
        dispatch({
            type: Types.SET_USER,
            payload: {
                user: {
                    ...decode,
                    name: response.data.name,
                    email: response.data.email,
                }
            }
        })

        history.push('/')
    }).catch( (error) => {
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}

export const login = (user, history) => dispatch => {
    http.post('/auth/login', user)
    .then(function (response) {
        let token = response.data.jwtToken;
        localStorage.setItem('auth_token',token);
        // http.setAuthToken(token)
        let decode = jwtDecode(token)
        dispatch({
            type: Types.SET_USER,
            payload: {
                user: {
                    ...decode,
                    name: response.data.name,
                    email: response.data.email,
                }
            }
        })

        history.push('/')
    }).catch(function (error) {
        console.log(error.response.data)
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}

export const logout = history => dispatch => {
    localStorage.removeItem('auth_token')
    history.push('/login')
    return {
        type: Types.SET_USER,
        payload: {
            user: {}
        }
    }
}