function Agents() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to Agents Page</h1>

            {/* Agents Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Agent Omen */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://wallpapers.com/images/hd/valorant-desktop-wallpaper-56cc8b15f4b93ye6.jpg"
                        alt="Omen"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Omen</h2>
                    <p className="text-gray-400 mt-2">A mysterious agent with control over shadows. He can teleport and obscure vision.</p>
                </div>

                {/* Agent Yoru */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://wallpapers.com/images/hd/yoru-valorant-tnn4rhw6rxqmem3k.jpg"
                        alt="Yoru"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Yoru</h2>
                    <p className="text-gray-400 mt-2">A duelist who can create distractions and warp through dimensions to confuse enemies.</p>
                </div>

                {/* Agent Cypher */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g92s0HYUbijjEv7fSjFWL3ajcI_p40UkDQ&s"
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
