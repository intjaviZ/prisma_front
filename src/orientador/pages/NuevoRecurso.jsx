import { Outlet } from "react-router-dom";

const NuevoRecurso = () => {
    return (
        <section className=" min-h-[calc(100vh-6rem)] bg-gray-50 px-10">
            <div className="w-full">
                <Outlet />
            </div>
        </section>
    );
}

export default NuevoRecurso;