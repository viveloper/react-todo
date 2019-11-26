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
  try {
    const response = await axios.get(`${API_BASE_URL}/todo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const todoList = response.data;
    return todoList;
  }
  catch (error) {
    throw error;
  }
}

export const addTodo = async (token, title) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todo`, {
      title
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const todo = response.data;
    return todo;
  }
  catch (error) {
    throw error;
  }
}

export const updateTodo = async (token, id, todo) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/todo/${id}`, todo, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const updatedTodo = response.data;
    return updatedTodo;
  }
  catch (error) {
    throw error;
  }
}

export const deleteTodo = async (token, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/todo/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  catch (error) {
    throw error;
  }
}