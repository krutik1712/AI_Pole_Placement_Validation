// Home Component
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br bg-[#eaeaea] text-white p-6">
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center"> 
                <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">AI Pole Placement Validation</h1>
                <div className="flex gap-6">
                    <Link to="/map" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-lg transition">View Map</Link>
                    <Link to="/upload" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition">Upload File</Link>
                    <Link to="/results" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition">View Results</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;