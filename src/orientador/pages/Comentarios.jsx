import BarraInicial from "../componentes/BarraInicial";

const Comentarios = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-6rem)] bg-gray-50">
            <BarraInicial titulo={"Comentarios"} descripcion={"Comentarios de los alumnos"} />
            <section className="px-10 py-2">
                <div className='min-w-[596px] max-h-[900px] shadow-lg rounded-md bg-white text-center'>
                    <table className='w-full table-auto border-collapse'>
                        <thead>
                            <tr className='bg-gray-100 text-gray-700'>
                                <th className='px-4 py-4 text-left w-1/3'>Nombre</th>
                                <th className='px-4 py-4 text-left w-2/3'>Comentario</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-800 text-left'>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-4 w-1/3'>Ana López</td>
                                <td className='px-4 py-4 w-2/3'>MI perro se murió</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-4 w-1/3'>Carlos Ruiz</td>
                                <td className='px-4 py-4 w-2/3'>Quiero ser influencer</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-4 w-1/3'>María Torres</td>
                                <td className='px-4 py-4 w-2/3'>Odio las matemáticas</td>
                            </tr>
                            <tr className='shadow-sm'>
                                <td className='px-4 py-4 w-1/3'>Zárate Gómez Javier Antonio</td>
                                <td className='px-4 py-4 w-2/3'>Para ajustar el ancho de las columnas en una tabla con Tailwind, puedes usar las clases w-1/3 y w-2/3 directamente en las celdas . En tu caso, como quieres que la columna Nombre tenga 1/3 del ancho y Comentario tenga 2/3, haz esto:</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Comentarios;