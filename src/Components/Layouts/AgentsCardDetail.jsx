import React, { useState } from "react";
import { useParams } from "react-router-dom";
import agentsData from "../../Data/AgentsData";

const AgentsCardDetails = () => {
    const { name } = useParams();
    const agent = agentsData.find((Data) => Data.AgentsName === name);

    // State untuk menyimpan deskripsi ability saat ini
    const [currentAbility, setCurrentAbility] = useState({
        name: agent.AgentsAbility[0].name,
        description: agent.AgentsAbility[0].description,
    });

    // Event handler ketika ability diklik
    const handleAbilityClick = (ability) => {
        setCurrentAbility(ability);
    };

    return (
        <div className="p-6 sm:p-8">
            <div className="max-w-5xl mx-auto bg-gray-800 text-white p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row">
                    {/* Gambar Agent */}
                    <div className="sm:w-1/3 mb-4 sm:mb-0">
                        <img
                            src={agent.AgentsImage}
                            alt={agent.AgentsName}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Informasi Agent */}
                    <div className="sm:w-2/3 sm:pl-6">
                        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
                            {agent.AgentsName.toUpperCase()}
                        </h1>
                        <h2 className="text-lg font-semibold text-gray-400 mb-2">
                            Role: <span className="text-yellow-400">{agent.AgentsRole}</span>
                        </h2>
                        <p className="text-gray-300 mb-6">{agent.AgentsDescription}</p>

                        {/* List of Abilities */}
                        <ul className="flex flex-col lg:flex-row justify-around sm:justify-center sm:gap-4 pt-6 border-t border-gray-700">
                            {agent.AgentsAbility.map((ability, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer p-3 rounded-lg text-center transition-all duration-300 ${currentAbility.name === ability.name
                                            ? "bg-yellow-500 text-gray-900 font-semibold border-2 border-yellow-400"
                                            : "hover:bg-gray-700 hover:text-white"
                                        }`}
                                    onClick={() => handleAbilityClick(ability)}
                                >
                                    {ability.name}
                                </li>
                            ))}
                        </ul>

                        {/* Display Ability Description */}
                        <div className="mt-6 bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-yellow-400">
                                {currentAbility.name.toUpperCase()}
                            </h3>
                            <p className="text-gray-300">{currentAbility.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsCardDetails;
