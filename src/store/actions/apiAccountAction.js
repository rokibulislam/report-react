import http from '../../services/httpService'
import * as Types from './type'

// export const addApiAccount = () => ({
//      type: Types.ADD_APIACCOUNT
// })  

export const getAllApiAccount = () => dispatch => {
     http.get('/api-account')
     .then( (response) => {
          dispatch({
             type: Types.LOAD_APIACCOUNT,
             payload: {
               apiAccount: response.data
             }
          })
     }).catch( (error) => {
          console.log(error)
     })
}

export const getpiAccount = (id) => dispatch => {
     http.get('/api-account', id )
     .then( (response) => {

     }).catch( (error) => {
          console.log(error)
     })
}

export const AddApiAccount = () => dispatch => {
     http.post('/api-account')
     .then( (response) => {
          dispatch({
             type: Types.ADD_APIACCOUNT,
             payload: {
               apiAccount: response.data
             }
          })
     }).catch( (error) => {
          console.log(error)
     })
}


export const updateApiAccount = () => dispatch => {
     http.put('/api-account')
     .then( (response) => {
          dispatch({
             type: Types.UPDATE_APIACCOUNT,
             payload: {
               apiAccount: response.data
             }
          })
     }).catch( (error) => {
          console.log(error)
     })
}

export const deleteApiAccount = () => dispatch => {
    http.delete('/api-account')
    .then( (response) => {
         dispatch({
            type: Types.DELETE_APIACCOUNT,
            payload: {
               id: response.data._id
            }
         })
    }).catch( (error) => {
         console.log(error)
    })
}