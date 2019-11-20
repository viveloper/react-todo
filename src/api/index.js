import axios from 'axios';
import { AUTH_BASE_URL, API_BASE_URL } from '../constants';

export const signin = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/signin`, {
      email,
      password
    });
    return response.data;
  }
  catch (error) {
    throw error;
  }
}

export const getTodoList = async token => {
  try{
    const response = await axios.get(`${API_BASE_URL}/todo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  catch(error){
    throw error;
  }
}