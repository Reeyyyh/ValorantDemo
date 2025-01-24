import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import agentsData from "../Data/AgentsData";

function Agents() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Agents</h1>

            {/* Agents Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {agentsData.map((agent) => (
                    <AgentCard key={agent.id} agent={agent} />
                ))}
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
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Gambar dengan handling */}
            <div className="w-full h-56 relative mb-4">
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
                        className={`w-full h-full object-cover rounded-md ${
                            loading ? "hidden" : "block"
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
            </div>

            <h2 className="text-xl font-semibold">{agent.AgentsName.toLocaleUpperCase()}</h2>
            <h2 className="text-sm">{agent.AgentsRole}</h2>
            <p className="text-gray-400 mt-2">{agent.AgentsDescription}</p>
        </div>
    );
}

export default Agents;
