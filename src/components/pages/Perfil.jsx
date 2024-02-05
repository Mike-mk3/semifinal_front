import { useEffect, useState } from "react";
import { profileService, updateProfileService } from "../../services/Auth.service";
import toast from 'react-hot-toast';

function Perfil() {

    const [formulario, setFormulario] = useState({
        email: '',
        password: '',
        name: "",
        last_name: "",
        active: true,
    });

    useEffect(() => {
        // traer informacion del perfil.....
        profileService()
            .then((res) => {
                console.log(res.data.data);
                setFormulario(res.data.data);
            }).catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(formulario);
        updateProfileService(formulario)
            .then((res) => {
                console.log(res.data.data);
                toast.success(`Perfil Actualizado`);
            })
            .catch((err) => {
                console.log(err);
                toast.error(`No se pudo acrualizar`);
            })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">Perfil</h1>
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

                <button type="submit" className="btn btn-primary">Save</button>
            </form>

        </div>
    );
}

export default Perfil;