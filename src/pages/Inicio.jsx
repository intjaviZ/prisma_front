import { motion } from "framer-motion"
import Aplicaciones from "../componentes/Aplicaiones";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import Hero from "../componentes/hero";

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
            <main className="mt-0 min-h-[calc(100vh-80px)]">
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
            <Footer/>
        </div>
     );
}
 
export default Inicio;