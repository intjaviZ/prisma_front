import { Outlet } from "react-router-dom";
import Sidebar from "../componentes/SideBar";
import HeaderOrientador from "../componentes/HeaderOrientador";


const LayoutOrientador = () => {
    return ( 
        <div className="flex h-screen w-screen">
            <Sidebar />
            <main className="w-full flex-1 pt-24 overflow-y-auto bg-gray-50">
                <HeaderOrientador />
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutOrientador;
