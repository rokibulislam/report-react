import jwtDecode from 'jwt-decode'
import http from './httpService'
const tokenKey = "auth_token";

export async function login(email, password) {
   const { data } = await http.post('', { email, password });
}

const register = ( user ) => {
    return http.post('', {
        email: user.email,
        password: user.password,
        name: user.name
    })    
}


export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey,jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
    return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey)
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
    register
};