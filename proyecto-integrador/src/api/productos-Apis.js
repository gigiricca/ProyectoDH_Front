import axios from 'axios';

// Obtener la URL base del backend desde las variables de entorno
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProductos = async () => {
  try {
    let response = await axios.get(`${API_BASE_URL}/api/productos`);
    return response.data;
  } catch (error) {
    console.log('Error al obtener productos:', error);
  }
};

export const getProductoById = async (id) => {
  try {
    let response = await axios.get(`${API_BASE_URL}/api/productos/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error al obtener producto por ID:', error);
  }
};

export const getAllProductos = async (page = 1, pageSize = 10) => {
  try {
    let response = await axios.get(`${API_BASE_URL}/api/productos?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.log('Error al obtener todos los productos:', error);
  }
};
