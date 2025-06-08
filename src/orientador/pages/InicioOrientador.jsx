import { UserRound } from 'lucide-react';
import GraficaPie from '../componentes/GraficaPie';
import BarraInicial from '../componentes/BarraInicial';

const InicioOrientador = () => {
    const dataDimension = [
        { name: 'Académica', value: 12 },
        { name: 'Familiar', value: 8 },
        { name: 'Social', value: 5 },
    ];

    const dataRiesgo = [
        { name: 'Alto', value: 4 },
        { name: 'Medio', value: 10 },
        { name: 'Bajo', value: 11 },
    ];
    return (
        <div className="flex flex-col min-h-[calc(100vh-6rem)] bg-gray-50">
            <BarraInicial titulo={"Inicio"} descripcion={"Vista general de la escuela"}/>
            <section className='flex items-center justify-evenly gap-5 px-10 py-7 text-gray-900'>
                <div className="w-72 bg-white shadow-md rounded-2xl p-5 py-7 flex items-center justify-start gap-5">
                    <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center">
                        <UserRound />
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>12</p>
                        <p className='font-light text-sm'>Estudiantes</p>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-2xl p-5 py-7 flex items-center justify-start gap-5">
                    <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center">
                        <UserRound />
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>12</p>
                        <p className='font-light text-sm'>En riesgo</p>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-2xl p-5 py-7 flex items-center justify-start gap-5">
                    <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center">
                        <UserRound />
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>12</p>
                        <p className='font-light text-sm'>Dimension</p>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-2xl p-5 py-7 flex items-center justify-start gap-5">
                    <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center">
                        <UserRound />
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>12</p>
                        <p className='font-light text-sm'>Evaluacion</p>
                    </div>
                </div>

            </section>
            <section className='flex items-start justify-start gap-5 px-10 py-7 text-gray-900 flex-1 min-h-[300px]'>
                <div className='min-w-[596px] max-h-[900px] shadow-lg rounded-md bg-white text-center'>
                    <table className='w-full table-auto border-collapse'>
                        <thead>
                            <tr className='bg-gray-100 text-gray-700'>
                                <th className='px-4 py-2 text-center'>Nombre</th>
                                <th className='px-4 py-2 text-center'>Salón</th>
                                <th className='px-4 py-2 text-center'>Dimensión</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-800'>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-2'>Ana López</td>
                                <td className='px-4 py-2'>1A</td>
                                <td className='px-4 py-2'>Académica</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-2'>Carlos Ruiz</td>
                                <td className='px-4 py-2'>2B</td>
                                <td className='px-4 py-2'>Familiar</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-2'>María Torres</td>
                                <td className='px-4 py-2'>3C</td>
                                <td className='px-4 py-2'>Social</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-2'>Zárate Gómez Javier Antonio</td>
                                <td className='px-4 py-2'>6°B de Programación matutino</td>
                                <td className='px-4 py-2'>familiar y de contexto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='min-w-[596px] h-[900px] flex flex-col gap-10'>
                    <div className='w-full h-1/2 p-7
                    shadow-lg rounded-md bg-white text-left'>
                        <h2 className='font-semibold text-xl'>Alumnos por dimensión</h2>
                        <div>
                            <GraficaPie data={dataDimension}/>
                        </div>
                    </div>
                    <div className='w-full h-1/2 p-7
                    shadow-lg rounded-md bg-white text-left'>
                        <h2 className='font-semibold text-xl'>Alumnos por riesgo</h2>
                        <div>
                            <GraficaPie data={dataRiesgo}/>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default InicioOrientador;