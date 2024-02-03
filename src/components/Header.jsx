import { NavLink } from "react-router-dom";
import { useAuth } from './context/AuthContext';

function Header() {
    const { isLogged, user } = useAuth();
    return (
        <>
            <nav className="py-2 bg-body-tertiary border-bottom" data-bs-theme="dark">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><NavLink to="/home" className="nav-link link-body-emphasis px-2" aria-current="page">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/productos" className="nav-link link-body-emphasis px-2">Productos</NavLink></li>
                        <li className="nav-item"><NavLink to="/checkout" className="nav-link link-body-emphasis px-2">Checkout</NavLink></li>
                        <li className="nav-item"><NavLink to="/perfil" className="nav-link link-body-emphasis px-2">Perfil</NavLink></li>
                    </ul>
                    <ul className="nav">
                        {
                            isLogged ?
                                <>
                                    <li className="nav-item"><NavLink to="/login" className="nav-link link-body-emphasis px-2">{user.full_name}</NavLink></li>
                                    <li className="nav-item"><NavLink to="/signup" className="nav-link link-body-emphasis px-2">Log out</NavLink></li>
                                </>
                                :
                                <>
                                    <li className="nav-item"><NavLink to="/login" className="nav-link link-body-emphasis px-2">Login</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink to="/signup" className="nav-link link-body-emphasis px-2">Sign up</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Header;