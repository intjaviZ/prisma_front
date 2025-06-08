import { motion } from "framer-motion"
import Aplicaciones from "../componentes/inicio/Aplicaiones";
import Header from "../componentes/general/Header";
import Hero from "../componentes/inicio/hero";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeIn" },
  },
};

const Inicio = () => {
    return (
        <div>
            <Header verNav={true}/>
            <main className="mt-0 mb-10 min-h-[calc(100vh-80px)] flex flex-col items-start justify-center gap-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Hero/>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Aplicaciones/>
                </motion.div>
            </main>
        </div>
     );
}
 
export default Inicio;