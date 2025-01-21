// Maps.jsx
function Maps() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Maps</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Bind Map */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/maps/bind.jpg" // Gambar peta Bind
                        alt="Bind Map"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Bind</h2>
                    <p className="text-gray-400 mt-2">A dual-lane map with teleporters that allow for fast rotations and strategic plays.</p>
                </div>

                {/* Haven Map */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/maps/haven.jpg" // Gambar peta Haven
                        alt="Haven Map"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Haven</h2>
                    <p className="text-gray-400 mt-2">A unique 3-bombsite map with three different bomb sites to strategize for.</p>
                </div>

                {/* Ascent Map */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://media.valorant-api.com/maps/ascent.jpg" // Gambar peta Ascent
                        alt="Ascent Map"
                        className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">Ascent</h2>
                    <p className="text-gray-400 mt-2">A central map with a large open area, perfect for mid control and vertical plays.</p>
                </div>
            </div>
        </div>
    );
}

export default Maps;
