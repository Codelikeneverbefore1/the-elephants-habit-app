//for making HTTP req, sending data back and setting data in localStorage
import axios from 'axios'

const API_URL = '/api/users/'

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {                                             // <-- when using axios data goes inside object called 'data'
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {                                             // <-- when using axios data goes inside object called 'data'
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {   // any funcs to be exported to be put here
    register,
    login,
    logout,
}
 export default authService