import { Link, useLocation } from "react-router-dom";

const ResultComponent = () => {
    const location = useLocation();
    const { totalPoles = 0, detectedPoles = 0 } = location.state || {}; // Default values if state is undefined

    return (
        <div className="p-6 bg-white rounded-lg shadow-xl w-1/2 mx-auto mt-10 text-center">
            <h2 className="text-xl font-bold mb-4">Analysis Results</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">Total Poles Placed: <span className="text-blue-600">{totalPoles}</span></p>
                <p className="text-lg font-semibold">Poles Inside Selected Area: <span className="text-green-600">{detectedPoles}</span></p>
                <p className="text-lg font-semibold">Poles Outside Area: <span className="text-red-600">{totalPoles - detectedPoles}</span></p>
            </div>
            <Link to="/" className="mt-4 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition">Back</Link>
        </div>
    );
};

export default ResultComponent;
