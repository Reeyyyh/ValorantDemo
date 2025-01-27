import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Agents from "../Pages/Agents";
import Maps from "../Pages/Maps";
import Arsenal from "../Pages/Arsenal";
import AgentsCardDetails from "../Components/Layouts/AgentsCardDetail";
import MapsCardDetails from "../Components/Layouts/MapsCardDetails";
import ArsenalCardDetails from "../Components/Layouts/ArsenalCardDetail";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Agents" element={<Agents></Agents>}></Route>
            <Route path="/Maps" element={<Maps></Maps>}></Route>
            <Route path="/Arsenal" element={<Arsenal></Arsenal>}></Route>

            <Route path="/Agents/:name/" element={<AgentsCardDetails />}></Route>
            <Route path="/Maps/:name/" element={<MapsCardDetails />}></Route>
            <Route path="/Arsenal/:name/" element={<ArsenalCardDetails />}></Route>
        </Routes>
    );
}

export default AppRoutes