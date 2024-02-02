import { useState } from "react";

function Login() {

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
    }


    return (
        <div className="container">
            <h3 className="text-center mb-5"> LOGINNN </h3>


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