import axios from 'axios';

const port = process.env.REACT_APP_PORT || 3000;

export const getProducts = async () => await axios.get(`http://localhost:${port}/products`);
