import { Link } from "react-router-dom";
import { Home, MessageSquare, CirclePlus, PieChart } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const styleClass = "text-[#10bc69]";
    const [active, setActive] = useState({
        inicio: true,
        comentarios: false,
        nuevo: false,
        seguimientos: false,
    });
    const navItems = [
        { to: "/panel/inicio", label: "Inicio", icon: Home, nombre: "inicio" },
        { to: "/panel/comentarios", label: "Comentarios", icon: MessageSquare, nombre: "comentarios" },
        { to: "/panel/nuevoRecurso", label: "Nuevo recurso", icon: CirclePlus, nombre: "nuevo" },
        { to: "/panel/seguimientos", label: "Seguimientos", icon: PieChart, nombre: "seguimientos" },
    ];

    const handleActive = (item) => {
        setActive((prev) => ({
            "inicio": item === "inicio" ? !prev.inicio : false,
            "comentarios": item === "comentarios" ? !prev.comentarios : false,
            "nuevo": item === "nuevo" ? !prev.nuevo : false,
            "seguimientos": item === "seguimientos" ? !prev.seguimientos : false,
        }));
    }

    return (
        <aside className="w-60 h-screen bg-white shadow-md flex flex-col">
            <div className="w-full top-0 m-0 p-4 bg-[#10bc69] h-20">
                <h1 className="text-2xl font-bold text-center mb-6 text-white">Orientador</h1>
            </div>
            <nav className="flex flex-col gap-3 p-4">
                <Link
                    key={navItems[0].to}
                    to={navItems[0].to}
                    className={`${active.inicio ? styleClass : 'text-gray-700'} flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition`}
                    onClick={() => handleActive(navItems[0].nombre.toLocaleLowerCase())}
                >
                    <Home className="w-5 h-5" />
                    {navItems[0].label}
                </Link>
                {/* <Link
                    key={navItems[3].to}
                    to={navItems[3].to}
                    className={`${active.seguimientos === true ? styleClass : 'text-gray-700'} flex items-center gap-3 px-3 py-2 rounded-lg font-medium  hover:bg-gray-100 transition`}
                    onClick={() => handleActive(navItems[3].nombre.toLocaleLowerCase())}
                >
                    <PieChart className="w-5 h-5" />
                    {navItems[3].label}
                </Link> */}
                <Link
                    key={navItems[1].to}
                    to={navItems[1].to}
                    className={`${active.comentarios === true ? styleClass : 'text-gray-700'} flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition`}
                    onClick={() => handleActive(navItems[1].nombre.toLocaleLowerCase())}
                >
                    <MessageSquare className="w-5 h-5" />
                    {navItems[1].label}
                </Link>
                <Link
                    key={navItems[2].to}
                    to={navItems[2].to}
                    className={`${active.nuevo === true ? styleClass : 'text-gray-700'} flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition`}
                    onClick={() => handleActive(navItems[2].nombre.toLocaleLowerCase())}
                >
                    <CirclePlus className="w-5 h-5" />
                    {navItems[2].label}
                </Link>
                
            </nav>
        </aside>
    );
};

export default Sidebar;
