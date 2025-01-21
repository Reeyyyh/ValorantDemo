// Arsenal.jsx
function Arsenal() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to Arsenal Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Ghost */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/weapons/ghost.jpg" // Gambar Ghost
                        alt="Ghost"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Ghost</h2>
                    <p className="text-gray-400 mt-2">A silenced pistol with high accuracy, ideal for stealth and close combat.</p>
                </div>

                {/* Spectre */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/weapons/spectre.jpg" // Gambar Spectre
                        alt="Spectre"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Spectre</h2>
                    <p className="text-gray-400 mt-2">A submachine gun with a high rate of fire and low recoil, perfect for close-range skirmishes.</p>
                </div>

                {/* Phantom */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/weapons/phantom.jpg" // Gambar Phantom
                        alt="Phantom"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Phantom</h2>
                    <p className="text-gray-400 mt-2">A versatile fully automatic rifle with moderate recoil, great for both long and short-range combat.</p>
                </div>
            </div>
        </div>
    );
}

export default Arsenal;
