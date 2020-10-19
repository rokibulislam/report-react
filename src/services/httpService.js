import axios from 'axios'
import { toast } from 'react-toastify'


// axios.interceptors.response.use(null, error => {
//     const expectedError =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500;
  
//     if (!expectedError) {
//       toast.error("An unexpected error occurrred.");
//     }
  
//     return Promise.reject(error);
// });

axios.defaults.baseURL = 'http://localhost:8085/';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const setAuthToken = token => axios.defaults.headers.common["access-token"] = token;


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setAuthToken
}