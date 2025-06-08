import BarraInicial from "../componentes/BarraInicial";
import DispersionChart from "../componentes/DispersionChart";
import GraficaPie from "../componentes/GraficaPie";

const Seguimientos = () => {
    const dataDimension = [
        { name: 'Académica', value: 12 },
        { name: 'Familiar', value: 8 },
        { name: 'Social', value: 5 },
    ];
    return (
        <div className="flex flex-col min-h-[calc(100vh-6rem)] bg-gray-50">
            <BarraInicial titulo={"Seguimiento"} descripcion={"Seguimiento de los estudiantes"} />
            <section className="p-12 w-full  flex flex-col gap-10">
                <div className="w-full  flex gap-10">
                    <div className="flex flex-col items-start justify-center gap-10">
                        <div className='p-8 w-[596px] shadow-lg rounded-xl bg-white text-left'>
                            <h2>Alumno del grado y grupo</h2>
                        </div>
                        <div className='p-8 w-[596px] h-96 shadow-lg rounded-xl bg-white text-left'>
                            <h2 className='font-semibold text-xl mb-4'>Evaluación por dimension</h2>
                            <div>
                                <GraficaPie data={dataDimension} />
                            </div>
                        </div>
                    </div>
                    <div className='p-8 w-[596px] shadow-lg rounded-xl bg-white text-left'>
                        <h3 className='font-semibold text-xl mb-4'>Historial de Test</h3>
                        <div>
                            <DispersionChart />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Seguimientos;