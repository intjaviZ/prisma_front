import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiChat } from "react-icons/bi";
import CardFase from "./CardFase";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Aplicaciones = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <section id="aplicaciones" className="bg-[#f9f9f9] py-6 md:py-16 mb-4  min-h-[calc(100vh-80px)] w-full ">
            <div className="text-center px-8 py-1 mb-8 relative">
                <motion.span
                    className="absolute -top-4 text-[#5f687b] opacity-15 left-0 right-0 z-10 font-bold text-5xl
                    uppercase leading-none"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Aplicaciones
                </motion.span>
                <span className="absolute -top-4 text-[#5f687b] opacity-15 left-0 right-0 z-10
                    font-bold text-5xl uppercase leading-none">Aplicaciones</span>
                <h2 className="relative text-[#5f687b] text-3xl font-bold uppercase mb-5 pb-0 z-20">Aplicaciones</h2>
                <p className="relative mb-0 z-20 text-[#444444]">Prueba uno de nuestros espacios para relajarte un poco</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 mx-5 mb-0">
                <CardFase
                    titulo="ChatBot AI"
                    info="En este espacio podrás resolver dudas y recibir apoyo inmediato por medio de un modelo de AI."
                    ruta="/chat"
                    icono={<BiChat className="text-[#10bc69] w-9 h-9" />}
                />
                <CardFase
                    titulo="Entorno Virtual"
                    info="Sumergete en un espacio de relajación y despeja tu mente de todos los pensamientos malos."
                    ruta="/vr"
                    icono={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#10bc69" className="bi bi-headset-vr" viewBox="0 0 16 16">
                        <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248" />
                        <path d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8" />
                    </svg>}
                />
            </div>

        </section>
    );
}

export default Aplicaciones;