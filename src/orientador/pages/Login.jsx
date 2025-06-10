import { useNavigate } from "react-router-dom";
import { useOrientador } from "../contextos/OrientadorContext";
import '../../estilos/formulario.css';
import { loginOrientador, pedirEscuelas } from "../servicios/login";
import Header from "../../componentes/general/Header";
import { useEffect, useState } from "react";

const Login = () => {
    const [escuelas, setEscuelas] = useState([]);
    const { orientador, actualizarOrientador, acceder } = useOrientador();

    const navegar = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            const escuelas = await pedirEscuelas();
            setEscuelas(escuelas)
        }
        loadData();
    },[]);


    const login = async (event) => {
        event.preventDefault();
        const response = await loginOrientador({
            "username": orientador.nombre,
            "escuelaID": orientador.escuelaId,
            "password": orientador.password
        });
        if (response.status == 200) {
            acceder();
            setTimeout(() => {
                navegar('/panel');
            }, 400);
            
        } else {
            alert("Un campo es incorrecto");
        }
    }

    return (
        <div className="flex flex-col items-center justify-start">
            <Header/>
            <form onSubmit={login} className="bg-white shadow-md sm:p-8 mt-40 mx-40 w-[600px] flex items-center justify-center">
                <div className="box-formulario w-full ">
                    <div className="w-full py-4 flex flex-col">
                        <label className='pb-2' htmlFor="username">Username</label>
                        <input
                            name="username"
                            type="text"
                            value={orientador.nombre}
                            onChange={(e) => actualizarOrientador(e.target.value, "nombre")}
                        />
                    </div>
                    <div className="w-full py-4 flex flex-col">
                            <label className="pb-2" htmlFor='escuelas'>Escuela</label>
                            <select required name="escuelas" onChange={(e) => actualizarOrientador(e.target.value, "escuelaId")}>
                                <option value={0}>Selecciona una ciudad antes</option>
                                {escuelas ? escuelas.map((escuela) => (
                                    <option key={escuela.id} value={escuela.id}>{"escuela "+escuela.id}</option>
                                )) : <></>}
                            </select>
                        </div>
                    <div className="w-full py-4 flex flex-col">
                        <label className="pb-2" htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={orientador.password}
                            onChange={(e) => actualizarOrientador(e.target.value, "password")}
                        />
                    </div>
                    <button type="submit"
                        className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                     py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                    >Iniciar sesion</button>
                </div>
            </form>
        </div>
    );
}

export default Login;