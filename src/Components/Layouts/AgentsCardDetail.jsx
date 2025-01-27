import React from "react";
import { useParams } from "react-router-dom";
import agentsData from "../../Data/AgentsData";


const AgentsCardDetails = () => {
    const { name } = useParams();
    const agent = agentsData.find((Data) => Data.AgentsName === name)

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row">
                    {/* Gambar Agent */}
                    <div className="sm:w-1/3 mb-4 sm:mb-0">
                        <img
                            src={agent.AgentsImage}
                            alt={agent.AgentsName}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Informasi Agent */}
                    <div className="sm:w-2/3 sm:pl-8">
                        <h1 className="text-3xl font-bold mb-4">
                            {agent.AgentsName.toUpperCase()}
                        </h1>
                        <h2 className="text-lg font-semibold text-gray-400 mb-2">
                            Role: {agent.AgentsRole}
                        </h2>
                        <p className="text-gray-300">{agent.AgentsDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentsCardDetails