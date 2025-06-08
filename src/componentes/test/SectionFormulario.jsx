import Formulario from "./Formulario";

const SectionFormulario = () => {
    return ( 
        <section className="p-5 md:p-20">
            <div className="text-center container section-title">
                <h2 className="text-[#5f687b] text-3xl font-bold uppercase mb-5">Primera Fase</h2>
                <p className="mb-0 text-[#444444] text-sm">Este es un sencillo test que nos ayudará a generar una experiencia más perzonalizada para ti</p>
            </div>
            <Formulario/>
            
        </section>
     );
}
 
export default SectionFormulario;