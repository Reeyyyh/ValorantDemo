import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Welcome to Home Page</h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Agents Card */}
                <Link
                    to="/Agents"
                    className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 ease-in-out"
                >
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Valorant_logo.svg" // Logo or image for Agents
                            alt="Agents"
                            className="w-16 h-16"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-2">Agents</h2>
                    <p className="text-center text-gray-200">Discover and select agents for your team!</p>
                </Link>

                {/* Maps Card */}
                <Link
                    to="/Maps"
                    className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 ease-in-out"
                >
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Valorant_map_icon.svg" // Icon or image for Maps
                            alt="Maps"
                            className="w-16 h-16"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-2">Maps</h2>
                    <p className="text-center text-gray-200">Explore various maps for your next battle!</p>
                </Link>

                {/* Arsenal Card */}
                <Link
                    to="/Arsenal"
                    className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 ease-in-out"
                >
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Valorant_arsenal_icon.svg" // Icon or image for Arsenal
                            alt="Arsenal"
                            className="w-16 h-16"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-2">Arsenal</h2>
                    <p className="text-center text-gray-200">Check out the arsenal of weapons available.</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
