import agentsData from "../Data/AgentsData";

function Agents() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Agents</h1>

            {/* Agents Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {agentsData.map((agent) => (
                    <div
                        key={agent.id}
                        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* <img
                            src={agent.AgentsImage}
                            alt={agent.AgentsName}
                            className="w-full h-56 object-cover rounded-md mb-4"
                        /> */}
                        <h2 className="text-xl font-semibold">{agent.AgentsName}</h2>
                        <h2 className="text-sm">{agent.AgentsRole}</h2>
                        <p className="text-gray-400 mt-2">{agent.AgentsDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Agents;
