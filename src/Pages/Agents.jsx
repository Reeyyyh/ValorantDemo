function Agents() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to Agents Page</h1>

            {/* Agents Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Agent Omen */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://example.com/omen.jpg" // Gantilah URL ini dengan gambar Omen yang sesuai
                        alt="Omen"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Omen</h2>
                    <p className="text-gray-400 mt-2">A mysterious agent with control over shadows. He can teleport and obscure vision.</p>
                </div>

                {/* Agent Yoru */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://example.com/yoru.jpg" // Gantilah URL ini dengan gambar Yoru yang sesuai
                        alt="Yoru"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Yoru</h2>
                    <p className="text-gray-400 mt-2">A duelist who can create distractions and warp through dimensions to confuse enemies.</p>
                </div>

                {/* Agent Cypher */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://example.com/cypher.jpg" // Gantilah URL ini dengan gambar Cypher yang sesuai
                        alt="Cypher"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Cypher</h2>
                    <p className="text-gray-400 mt-2">A mastermind with the ability to spy on enemies and gather information.</p>
                </div>
            </div>
        </div>
    );
}

export default Agents;
