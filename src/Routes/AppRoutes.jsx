import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Agents from "../Pages/Agents";
import Maps from "../Pages/Maps";
import Arsenal from "../Pages/Arsenal";

function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Agents" element={<Agents></Agents>}></Route>
            <Route path="/Maps" element={<Maps></Maps>}></Route>
            <Route path="/Arsenal" element={<Arsenal></Arsenal>}></Route>
        </Routes>
    );
}

export default AppRoutes