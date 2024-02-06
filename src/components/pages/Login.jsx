import { useState } from "react";
import { loginService } from "../../services/Auth.service";
import { useAuth } from '../context/AuthContext';

function Login() {

    const { fnLogin } = useAuth();

    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

   
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(formulario);
        
        loginService(formulario)
        .then(response => {
            const token = response.data.data;
            fnLogin(token);
        }).catch(error => {
            console.log(error);
        }) }


    return (
        <div className="container page">
            <h1 className="text-center mb-5"> LOGIN </h1>


            <form onSubmit={enviarDatos}>
                <div className="form-floating mb-3">
                    <input type="email"
                        className="form-control"
                        id="email floatingInput"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        value={formulario.email} />
                    <label htmlFor="floatingInput">Correo Electronico</label>
                </div>

                <div className="form-floating">
                    <input type="password"
                        className="form-control"
                        id="password floatingPassword"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Password"
                        value={formulario.password} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>


        </div>);
}

export default Login;
