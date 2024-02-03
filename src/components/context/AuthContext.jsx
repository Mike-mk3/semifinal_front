import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);

    const [user, setUser] = useState({
        full_name: '',
        email: '',
    });

    const fnLogin = (token) => {
        const tokenDecoded = jwtDecode(token);
        if (tokenDecoded){
            setIsLogged(true);
            setUser(tokenDecoded);
            window.localStorage.setItem(import.meta.env.VITE_TKN_NAME, token)
        }
    }

    const fnLogout = () => {
        console.log("entro al log_out");
        setIsLogged(false);
        setUser({
            full_name: '',
            email: '',
        });
        window.localStorage.removeItem(import.meta.env.VITE_TKN_NAME);
        }

    useEffect (() => {
        console.log("entro a recargar la pg????");
        const tknFromStorage = window.localStorage.getItem(import.meta.env.VITE_TKN_NAME);
        if (tknFromStorage) {
            console.log("hay una sesion correcta");
            fnLogin(tknFromStorage);
        } else {
            console.log ("sesion incorrecta");
        }
}, []);





    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, fnLogin, fnLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
