import { createContext, useContext, useState } from 'react';
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
        }
    }


    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, fnLogin }}>
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
