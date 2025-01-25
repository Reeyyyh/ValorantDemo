import { useState } from "react";
import mapData from "../Data/MapsData";
import { FaExclamationTriangle } from "react-icons/fa";

// Maps.jsx
function Maps() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Maps</h1>

            {/* Maps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {mapData.map((map) => (
                    <MapsCard key={map.id} map={map} />
                ))}
            </div>
        </div>
    );
}

function MapsCard({ map }) {
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
                        src={map.MapImage}
                        alt={map.MapName}
                        className={`w-full h-full object-cover rounded-md ${
                            loading ? "hidden" : "block"
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
            </div>

            <h2 className="text-xl font-semibold">{map.MapName}</h2>
            <p className="text-sm text-wrap">{map.MapDescription}</p>
        </div>
    );
}

export default Maps;
