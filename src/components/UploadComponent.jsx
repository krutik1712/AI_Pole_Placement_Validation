// Upload Component
import { useState } from "react";
import { Link } from "react-router-dom";

const UploadComponent = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-xl w-1/2 mx-auto mt-10 text-center">
            <h2 className="text-xl font-bold mb-4">Upload Image/Video</h2>
            <input
                type="file"
                className="w-full my-3 p-2 border border-gray-300 cursor-pointer rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleFileChange}
            />
            {file && (
                <div className="mt-3 p-2 bg-gray-200 rounded-lg">
                    <p className="text-sm font-medium">Selected: {file.name}</p>
                </div>
            )}
            <button className="mt-4 px-6 py-3 mr-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition" onClick={() => alert("File uploaded for processing!")}>Upload</button>
            <Link to="/" className="mt-4 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition">Back</Link>
        </div>
    );
};

export default UploadComponent;