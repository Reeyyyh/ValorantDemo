import { useState } from "react";
import * as FaIcon from "react-icons/fa"
import { Link } from "react-router-dom"

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`h-screen bg-slate-700 text-white shadow-lg transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`p-4 focus:outline-none text-lg bg-slate-800 w-full flex items-center gap-2 transition-all duration-300 ${isExpanded ? "justify-start" : "justify-center"
                        }`}
                >
                    {/* Icon */}
                    {isExpanded ? <FaIcon.FaAngleLeft /> : <FaIcon.FaAngleRight />}

                    {/* Text Menu */}
                    {isExpanded && <span>Menu</span>}
                </button>


                <ul className="mt-4 space-y-4">
                    <li>
                        <Link to={"/"} className={`flex items-center gap-4 p-2 hover:bg-slate-600 rounded-lg cursor-pointer ${isExpanded ? "justify-start" : "justify-center"
                            }`}>
                            <FaIcon.FaHome />
                            {isExpanded && <span>Home</span>}
                        </Link>
                    </li>

                    <li

                    >
                        <Link to={"/Agents"} className={`flex items-center gap-4 p-2 hover:bg-slate-600 rounded-lg cursor-pointer ${isExpanded ? "justify-start" : "justify-center"
                            }`}>

                            <FaIcon.FaUser />
                            {isExpanded && <span>Agents</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Maps"} className={`flex items-center gap-4 p-2 hover:bg-slate-600 rounded-lg cursor-pointer ${isExpanded ? "justify-start" : "justify-center"
                            }`}>
                            <FaIcon.FaMap />
                            {isExpanded && <span>Maps</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Arsenal"} className={`flex items-center gap-4 p-2 hover:bg-slate-600 rounded-lg cursor-pointer ${isExpanded ? "justify-start" : "justify-center"
                            }`}>
                            <FaIcon.FaCrosshairs />
                            {isExpanded && <span>Arsenal</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
