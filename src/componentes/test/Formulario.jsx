import { useEffect, useState } from 'react';
import '../../estilos/formulario.css';
import { pedirEscuelas, pedirEstados, pedirGrupos, pedirMunicipios, pedirOpciones, pedirPreguntas, terminarTest } from '../../servicios/formulario';
import Cargando from '../general/Cargando';
import PreguntaTest from './PreguntaTest';
import { useNavigate } from 'react-router-dom';
const Formulario = () => {
    const navegar = useNavigate();
    const [estados, setEstados] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [escuelas, setEscuelas] = useState([]);
    const [grupos, setGrupos] = useState([]);

    const [preguntas, setPreguntas] = useState([]);
    const [opciones, setOpciones] = useState([]);

    const [selecciones, setSelecciones] = useState({});
    const [escuela, setEscuela] = useState({
        "estado": 0,
        "ciudad": 0,
        "escuela": 0,
        "grupo": 0,
    });
    const [respuestas, setRespuestas] = useState({
        "1": 0,
        "2": 0,
        "3": 0,
    });
    const [alumno, setAlumno] = useState({
        "nombre": "",
        "numero_control": ""
    });
    const [comentario, setComentario] = useState("");

    const [isDataLoades, setIsDataLoaded] = useState(false);


    useEffect(() => {
        const loadData = async () => {
            const [estados, preguntas, opciones, escuelas] = await Promise.all([
                pedirEstados(),
                pedirPreguntas(),
                pedirOpciones(),
                pedirEscuelas()
            ]);

            setEstados(estados);
            setPreguntas(preguntas);
            setOpciones(opciones);
            setEscuelas(escuelas);
            setIsDataLoaded(true);
        }
        loadData();
    }, []);
    
    const onChangeUbicacionForm = (event, prop) => {
        let value = event.target.value;
        let esAlumno = false;
        let esComentario = false;
 
        switch (prop) {
            case "nombre":
                value = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
                value = value.replace(/\s{2,}/g, " ");
                value = value.trimStart();
                esAlumno = true;
                break;
            case "numero_control":
                value = value.replace(/[^0-9]/g, "");
                value = value.replace(/\s{2,}/g, " ");
                value = value.trimStart();
                esAlumno = true;
                break;
            case "comentario":
                value = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
                value = value.replace(/\s{2,}/g, " ");
                value = value.trimStart();
                esComentario = true;
                break;
            case "estado":
                value = parseInt(value);
                if (value !== 0) pedirMunicipios(value).then((data) => setCiudades(data));
                break;
            // case "ciudad":
            //     value = parseInt(value);
            //     if (value !== 0) pedirEscuelas().then((data) => setEscuelas(data))
            //     break;
            case "escuela":
                value = parseInt(value);
                if (value !== 0) pedirGrupos(value).then((data) => setGrupos(data))
                break;
            case "grupo":
                value = parseInt(value);
                break;
            default:
                break;
        }
        if (esAlumno) {
            setAlumno((prev) => ({ ...prev, [prop]: value }));
        } else if (esComentario){
            setComentario(value);
        } else {
            setEscuela((prev) => ({ ...prev, [prop]: value }));
        }
    };
    const onChangesOption = (e, idDimension) => {
        const idPregunta = e.target.name;
        const nuevoValor = parseInt(e.target.value, 10);
        const previo = selecciones[idPregunta] || 0;

        setRespuestas(prev => ({
            ...prev,
            [idDimension]: (prev[idDimension] || 0) - previo + nuevoValor
        }));

        setSelecciones(prev => ({
            ...prev,
            [idPregunta]: nuevoValor
        }));
    };

    const finalizarTest = async (e) => {
        e.preventDefault();
        const data = {
            "escuela": escuela,
            "alumno": alumno,
            "respuestas": respuestas,
            "comentario": comentario || ""
        }
        const resultados = await terminarTest(data);
        navegar("/resultado", { state: { resultados } });
    }

    return (isDataLoades ?
        <form id="test_preguntas" className="bg-white shadow-md p-3 sm:p-8" autoComplete="off" onSubmit={finalizarTest}>
            <div className="box-formulario">

                <div>
                    <div className='flex flex-col md:flex-row md:justify-between md:gap-10'> {/*Estado y ciudad */}
                        <div className="w-full py-4 flex flex-col">
                            <label className='pb-2' htmlFor="estados">Estado</label>
                            <select required name="estados" onChange={(e) => onChangeUbicacionForm(e, "estado")}>
                                <option value={0}>Selecciona una Opción</option>
                                {estados.map((estado) => (
                                    <option key={estado.id} value={estado.id}>{estado.estado}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full py-4 flex flex-col">
                            <label className="pb-2" htmlFor='ciudades'>Ciudad</label>
                            <select required name="ciudades" onChange={(e) => onChangeUbicacionForm(e, "ciudad")}>
                                <option value={0}>Selecciona un estado antes</option>
                                {ciudades.map((ciudad) => (
                                    <option key={ciudad.id} value={ciudad.id}>{ciudad.municipio}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:gap-10'> {/*Escuela y Grupo */}
                        <div className="w-full py-4 flex flex-col">
                            <label className="pb-2" htmlFor='escuelas'>Escuela</label>
                            <select required name="escuelas" onChange={(e) => onChangeUbicacionForm(e, "escuela")}>
                                <option value={0}>Selecciona una ciudad antes</option>
                                {escuelas ? escuelas.map((escuela) => (
                                    <option key={escuela.id} value={escuela.id}>{"escuela "+escuela.id}</option>
                                )) : <></>}
                            </select>
                        </div>
                        <div className="w-full py-4 flex flex-col">
                            <label className="pb-2" htmlFor='grados'>Grado y grupo</label>
                            <select required name="grados" onChange={(e) => onChangeUbicacionForm(e, "grupo")}>
                                <option value={0}>Selecciona una escuela antes</option>
                                {grupos.map((grado) => (
                                    <option key={grado.id} value={grado.id}>{grado.grupo}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:gap-10'> {/*Nombre y numero de control */}
                        <div className="w-full py-4 flex flex-col">
                            <label className="pb-2">Nombre completo</label>
                            <input type="text" className="form-control" required minLength="3" maxLength="60" onChange={(e) => onChangeUbicacionForm(e, "nombre")}></input>
                        </div>
                        <div className="w-full py-4 flex flex-col">
                            <label className="pb-2">Número de control</label>
                            <input type="text" className="form-control" required minLength="14" maxLength="20" onChange={(e) => onChangeUbicacionForm(e, "numero_control")}></input>
                        </div>
                    </div>
                </div>

                <div className="" id="box-preguntas">
                    <p className='text-[#5f687b] text-xl font-semibold uppercase my-5'>preguntas:</p>
                    {preguntas.map((pregunta) => {
                        const opcionesFiltradas = opciones.filter((opcion) => opcion.dimension === pregunta.dimension);
                        return (
                            <PreguntaTest
                                key={pregunta.id}
                                pregunta={pregunta}
                                opciones={opcionesFiltradas}
                                onChaged={(e) => onChangesOption(e, pregunta.dimension)}
                            />
                        );
                    })}
                </div>

                <div className="w-full py-4 flex flex-col">
                    <label className="pb-2">Puedes dejar aquí un comentario extra:</label>
                    <textarea className="form-control" maxLength="150" onChange={(e) => onChangeUbicacionForm(e, "comentario")}></textarea>
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit"
                        className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                     py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                    >Finalizar</button>
                </div>

            </div>
        </form> : <Cargando />
    );
}

export default Formulario;