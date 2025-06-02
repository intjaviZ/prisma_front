import { motion } from "framer-motion"
import ErrorCard from "./ErrorCard";
import LoadingCard from "./LoadingCard";
import TypingText from "./TypingText";

const ResponseChatCard = ({ status, response, error }) => {
    return (
        <div className="mt-8 w-full max-w-3xl mx-auto">
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
                    <TypingText text={response}/>
                </motion.div>
            )}
        </div>
    );
}

export default ResponseChatCard;