import { useState } from "react";
import { signUpService } from "../../services/Auth.service";
import toast from 'react-hot-toast';

function RegistrarUsuario() {

    const [formulario, setFormulario] = useState({
        email: '',
        password: '',
        name: "",
        last_name: "",
        active: true,
        dob: ""
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
        signUpService(formulario)
        .then(response => {
            console.log();
            toast.success(response.data.message);
        }).catch(error => {
            console.log(error);
            toast.error("No se pudo registrar la cuenta.");
        })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">Signup</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formulario.email} />
                </div>
                {/* Input name */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        value={formulario.name} />
                </div>
                {/* Input last name */}
                <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        onChange={handleInputChange}
                        value={formulario.last_name} />
                </div>
                {/* Input dob */}
                <div className="mb-3">
                    <label className="form-label">DOB</label>
                    <input type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        onChange={handleInputChange}
                        value={formulario.dob} />
                </div>
                {/* Input password */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                        value={formulario.password} />
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>

        </div>
    );
}

export default RegistrarUsuario;