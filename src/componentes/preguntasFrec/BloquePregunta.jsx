import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BloquesColapsables = ({ preguntas }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {preguntas.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.idPregunta} className="rounded-lg shadow-lg bg-white">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-5 text-gray-700 font-semibold focus:outline-none flex justify-between items-center"
            >
              <span>{item.pregunta}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: contentRefs.current[index]?.scrollHeight ?? "auto",
                    opacity: 1
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-[#f9f9f9] text-sm text-gray-700 px-4"
                >
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="py-2"
                  >
                    {item.respuesta}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default BloquesColapsables;
