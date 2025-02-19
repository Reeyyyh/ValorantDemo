import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import agentsData from "../Data/AgentsData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom"

function Agents() {
    return (
        <div className="px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Agents</h1>

            {/* Agents Container */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {agentsData.map((agent) => (
                    <Link to={`/Agents/${agent.AgentsName}`} key={agent.id} >
                        <AgentCard agent={agent} />
                    </Link>
                ))}
            </div>

            <div className="pt-8">
                <Footer></Footer>
            </div>
        </div>
    );
}

function AgentCard({ agent }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleImageLoad = () => setLoading(false);
    const handleImageError = () => {
        setLoading(false);
        setError(true);
    };

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-700 transition-transform duration-300">
            <div className="w-full h-100 relative mb-4">
                {loading && !error && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-md">
                        <div className="loader border-t-2 border-white rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                )}
                {error ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-md">
                        <FaExclamationTriangle className="text-gray-400 text-3xl" />
                    </div>
                ) : (
                    <img
                        src={agent.AgentsImage}
                        alt={agent.AgentsName}
                        className={`w-full h-full object-cover rounded-md ${loading ? "hidden" : "block"
                            }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
            </div>

            <h2 className="text-xl font-semibold">{agent.AgentsName.toLocaleUpperCase()}</h2>
            <h2 className="text-sm text-gray-400">{agent.AgentsRole}</h2>
        </div>
    );

}

export default Agents;
