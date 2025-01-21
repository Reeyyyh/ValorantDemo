import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome to Home Page</h1>

            {/* Cards Container */}
            <div className="flex justify-around space-x-8">
                {/* Agents Card */}
                <Link
                    to="/Agents"
                    className="w-1/3 bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
                >
                    <h2 className="text-xl font-semibold mb-4">Agents</h2>
                    <p>Discover and select agents for your team!</p>
                </Link>

                {/* Maps Card */}
                <Link
                    to="/Maps"
                    className="w-1/3 bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
                >
                    <h2 className="text-xl font-semibold mb-4">Maps</h2>
                    <p>Explore various maps for your next battle!</p>
                </Link>

                {/* Arsenal Card */}
                <Link
                    to="/Arsenal"
                    className="w-1/3 bg-red-500 text-white p-6 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
                >
                    <h2 className="text-xl font-semibold mb-4">Arsenal</h2>
                    <p>Check out the arsenal of weapons available.</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
