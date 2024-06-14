import axios from 'axios';

const apiUrl = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllNotes = async () => {
  try {
    const response = await axiosInstance.get('/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNoteById = async (id) => {
  try {
    const response = await axiosInstance.get(`/notes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNote = async (note) => {
  try {
    const response = await axiosInstance.post('/notes', note);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNote = async (id, note) => {
  try {
    const response = await axiosInstance.put(`/notes/${id}`, note);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    await axiosInstance.delete(`/notes/${id}`);
  } catch (error) {
    throw error;
  }
};
