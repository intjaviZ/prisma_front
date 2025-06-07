import { useEffect, useRef, useState } from "react";

function TypingText({ text, speed = 20 }) {
    const [displayed, setDisplayed] = useState("");
    const iRef = useRef(0); // mantiene el índice sin que el efecto se reinicie

    useEffect(() => {
        let cancelled = false;
        
        iRef.current = 0;     // resetea índice

        const type = () => {
            if (cancelled) return;
            if (iRef.current < (text.length - 1)) {
                setDisplayed((prev) => prev + text[iRef.current]);
                iRef.current++;
                setTimeout(type, speed);
            }
        };

        type();

        return () => {
            cancelled = true;
        };
    }, [text]);

    return (
        <p className="text-gray-800 whitespace-pre-line">
            {displayed}
        </p>
        
    );
}
export default TypingText;