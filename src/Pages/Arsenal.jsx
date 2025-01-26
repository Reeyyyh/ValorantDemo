import { useState } from "react";
import arsenalData from "../Data/ArsenalData";
import { FaExclamationTriangle } from "react-icons/fa";
import Footer from "../Components/Footer";

function Arsenal() {
    return (
        <div className="px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Arsenal</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {arsenalData.map((arsenal) => (
                    <ArsenalCard key={arsenal.id} arsenal={arsenal} />
                ))}
            </div>
            <div className="pt-8">
                <Footer></Footer>
            </div>
        </div>
    );
}

function ArsenalCard({ arsenal }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleImageLoad = () => setLoading(false);
    const handleImageError = () => {
        setLoading(false)
        setError(true)
    }

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
                        src={arsenal.ArsenalImage}
                        alt={arsenal.ArsenalImage}
                        className={`w-full h-full object-fill rounded-md ${loading ? "hidden" : "block"}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
            </div>
            <h2 className="text-xl font-bold">{arsenal.ArsenalName}</h2>
            <p className="text-[12px] text-wrap text-gray-400">{arsenal.ArsenalType}</p>
            <p className="text-[16px] text-wrap text-gray-200">{arsenal.ArsenalDescription}</p>
        </div>

    )
}

export default Arsenal;
