import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;


const getProducts = async () => {
    const response = await axios.get(WS_PATH + '/products');
    return response;
};



export {getProducts};