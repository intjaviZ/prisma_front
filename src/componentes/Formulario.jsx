import { useEffect, useState } from 'react';
import '../estilos/formulario.css';
import { pedirCiudades, pedirEscuelas, pedirEstados, pedirGrupos, pedirOpciones, pedirPreguntas, terminarTest } from '../servicios/formulario';
import Cargando from './Cargando';
import PreguntaTest from './PreguntaTest';
const Formulario = () => {
    const [estados, setEstados] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [escuelas, setEscuelas] = useState([]);
    const [grupos, setGrupos] = useState([]);

    const [preguntas, setPreguntas] = useState([]);
    const [opciones, setOpciones] = useState([]);

    const [respuestas, setRespuestas] = useState({});
    const [dataForm, setDataForm] = useState({
        "nombre": "",
        "estado": 0,
        "ciudad": 0,
        "escuela": 0,
        "grupo": 0,
        "respuestasTest": {}
    });

    const [isDataLoades, setIsDataLoaded] = useState(false);


    useEffect(() => {
        const loadData = async () => {
            // const [estados, preguntas, opciones] = await Promise.all([
            //     pedirEstados(),
            //     pedirPreguntas(),
            //     pedirOpciones()
            // ]);
            const estadosMock = [
                { idEstado: 1, estado: "Chiapas" },
                { idEstado: 2, estado: "Jalisco" },
                { idEstado: 3, estado: "Nuevo León" }
            ];
            const preguntasMock = [
                {
                    idPregunta: 1,
                    pregunta: "¿Te sientes motivado al iniciar tus actividades escolares?",
                    idDimension: 101
                },
                {
                    idPregunta: 2,
                    pregunta: "¿Cómo manejas el estrés durante tus exámenes?",
                    idDimension: 102
                },
                {
                    idPregunta: 3,
                    pregunta: "¿Con qué frecuencia participas en actividades sociales escolares?",
                    idDimension: 103
                },
                {
                    idPregunta: 4,
                    pregunta: "¿Con qué frecuencia participas actos ilicitos?",
                    idDimension: 103
                }
            ];
            const opcionesMock = [
                {
                    idOpcion: 1,
                    opcion: "Nunca",
                    valor: 1,
                    idDimension: 101
                },
                {
                    idOpcion: 2,
                    opcion: "A veces",
                    valor: 2,
                    idDimension: 102
                },
                {
                    idOpcion: 3,
                    opcion: "Frecuentemente",
                    valor: 3,
                    idDimension: 103
                },
                {
                    idOpcion: 4,
                    opcion: "Demasiado",
                    valor: 3,
                    idDimension: 103
                }
            ];


            setEstados(estadosMock);
            setPreguntas(preguntasMock);
            setOpciones(opcionesMock);
            setIsDataLoaded(true);
        }
        loadData();
    }, []);

    const onChangesOption = (idDimension, value) => {
        setRespuestas(prev => ({
            ...prev,
            [idDimension]: parseInt(value, 10)
        }));
    };
    useEffect(() => {
        setDataForm(prev => ({
            ...prev,
            respuestasTest: respuestas
        }));
    },[respuestas]);

    const onChangeUbicacionForm = (event, prop) => {
        let value = event.target.value;

        switch (prop) {
            case "nombre":
                value = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
                value = value.replace(/\s{2,}/g, " ");
                value = value.trimStart();
                break;
            case "estado":
                value = parseInt(value);
                if (value !== 0) pedirCiudades(value).then((data) => setCiudades(data));
                break;
            case "ciudad":
                value = parseInt(value);
                if (value !== 0) pedirEscuelas(value).then((data) => setEscuelas(data))
                break;
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
        setDataForm((prev) => ({ ...prev, [prop]: value }));
    };

    const finalizarTest = (e) => {
        e.preventDefault();
        const resultados = terminarTest(dataForm);
        console.log(resultados);
    }

    return (isDataLoades ?
        <form id="test_preguntas" className="bg-white shadow-md p-5 sm:p-8" autoComplete="off" onSubmit={finalizarTest}>
            <div className="box-formulario">

                <div>
                    <div className='flex justify-between gap-10'>
                        <div className="w-1/2 py-4 flex flex-col">
                            <label className='pb-2' htmlFor="estados">Estado</label>
                            <select required name="estados" onChange={(e) => onChangeUbicacionForm(e, "estado")}>
                                <option value={0}>Selecciona una Opción</option>
                                {estados.map((estado) => (
                                    <option key={estado.idEstado} value={estado.idEstado}>{estado.estado}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-1/2 py-4 flex flex-col">
                            <label className="pb-2" htmlFor='ciudades'>Ciudad</label>
                            <select required name="ciudades" onChange={(e) => onChangeUbicacionForm(e, "ciudad")}>
                                <option value={0}>Selecciona un estado antes</option>
                                {ciudades.map((ciudad) => (
                                    <option key={ciudad.idCiudad} value={ciudad.idCiudad}>{ciudad.ciudad}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className="w-1/2 py-4 flex flex-col">
                            <label className="pb-2" htmlFor='escuelas'>Escuela</label>
                            <select required name="escuelas" onChange={(e) => onChangeUbicacionForm(e, "escuela")}>
                                <option value={0}>Selecciona una ciudad antes</option>
                                {escuelas.map((escuela) => (
                                    <option key={escuela.idEscuela} value={escuela.idEscuela}>{escuela.escuela}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-1/2 py-4 flex flex-col">
                            <label className="pb-2" htmlFor='grados'>Grado y grupo</label>
                            <select required name="grados" onChange={(e) => onChangeUbicacionForm(e, "grupo")}>
                                <option value={0}>Selecciona una escuela antes</option>
                                {grupos.map((grado) => (
                                    <option key={grado.idGrado} value={grado.idGrado}>{grado.grado}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-2/3 py-4 flex flex-col">
                        <label className="pb-2">Nombre completo</label>
                        <input type="text" className="form-control" required minLength="3" maxLength="60"></input>
                    </div>
                </div>

                <div className="" id="box-preguntas">
                    <p>preguntas:</p>
                    {preguntas.map((pregunta) => {
                        const opcionesFiltradas = opciones.filter((opcion) => opcion.idDimension === pregunta.idDimension);
                        return (
                            <PreguntaTest
                                key={pregunta.idPregunta}
                                pregunta={pregunta}
                                opciones={opcionesFiltradas}
                                onChaged={(e) => onChangesOption(pregunta.idDimension, e.target.value)}
                            />
                        );
                    })}
                </div>

                <div className="w-full py-4 flex flex-col">
                    <label className="pb-2">Puedes dejar aquí un comentario extra:</label>
                    <textarea className="form-control" maxLength="150"></textarea>
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