import { Navigate, Outlet } from "react-router-dom";

const VistasProtegidas = ({ permissions, redirectTo="/orientador" }) => {
    if (!permissions) {
        return <Navigate to={redirectTo}/>
    }

    return <Outlet/>
}

export default VistasProtegidas;