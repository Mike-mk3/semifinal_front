import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;


const getProducts = async () => {
    const response = await axios.get(WS_PATH + '/products');
    return response;
};


const getProduct = async (id) => {
    const response = await axios.get(`${WS_PATH}/products?id=${id}`);
    return response.data;
};


export {getProducts, getProduct};