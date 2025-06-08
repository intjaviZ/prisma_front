const Semaforo = ({riesgo}) => {
    const color = riesgo === "Riesgo muy alto" ? "bg-red-600" : 
                 riesgo === "Riesgo alto" ? "bg-orange-500" :
                 riesgo === "Riesgo moderado" ? "bg-yellow-400" : 
                 riesgo === "Bajo riesgo" ? "bg-green-500" : 
                 "bg-gray-500";
    return (
        <>
            <div className={`inline-block min-w-3 min-h-3 w-4 h-4 rounded-full mr-2 ${color}`}></div>
        </>
    );
}

export default Semaforo;