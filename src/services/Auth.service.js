import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;


const loginService = async (data) => {
    console.log("entro al loginService");
    const response =await axios.post(WS_PATH + '/login', data);
    return response;
};


const signUpService = async (data) => {
    console.log("Entro a signUpService");
    const response = await axios.post(WS_PATH + '/users', data);
    return response;
};
// .....

// Perfil de usuario
const profileService = async () => {
    console.log("Entro a profileService");
    // como mando token de storage???
    const config = {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(import.meta.env.VITE_TKN_NAME)}`
        }
    };
    const response = await axios.get(WS_PATH + '/users', config);
    return response;
};

const updateProfileService = async (data) => {
    console.log("Entro a updateProfileService");
    const config = {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(import.meta.env.VITE_TKN_NAME)}`
        }
    };
    const response = await axios.put(WS_PATH + '/users', data, config);
    return response;
};
// .....

export {
    loginService,
    signUpService,
    profileService,
    updateProfileService
};
