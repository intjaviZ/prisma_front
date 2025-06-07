import { motion } from "framer-motion"
import ErrorCard from "./ErrorCard";
import LoadingCard from "./LoadingCard";
import TypingText from "./TypingText";
import EmptyCard from "./emptyCard";

const ResponseChatCard = ({ status, response, error }) => {
    return (
        <div className="mt-8 w-full max-w-3xl mx-auto">
            {status === "empty" && (
                <EmptyCard />
            )}
            {status === "loading" && (
                <LoadingCard />
            )}
            {status === "error" && (
                <ErrorCard message={error} />
            )}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                >
                    <TypingText text="Lamento mucho tu pérdida. Es normal sentirte triste, tu perrito fue parte de tu vida y tu familia.
                     Permítete llorar, recordar los buenos momentos y hablar con alguien que te escuche.
                      Puedes guardar una foto o algo especial que te lo recuerde con cariño. Con el tiempo, 
                      el dolor se vuelve más llevadero."/>
                </motion.div>
            )}
        </div>
    );
}

export default ResponseChatCard;