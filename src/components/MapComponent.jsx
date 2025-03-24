import { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";
import { Link, useNavigate } from "react-router-dom";

const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "10px",
    overflow: "hidden",
};

const defaultCenter = { lat: 18.5271, lng: 73.8245 };

const MapComponent = () => {
    const [polygonPath, setPolygonPath] = useState([]);
    const [poles, setPoles] = useState([]);
    const navigate = useNavigate();

    // Add polygon points
    const handleMapClick = useCallback((event) => {
        setPolygonPath((prev) => [...prev, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
    }, []);

    // Add poles separately
    const handlePoleClick = useCallback((event) => {
        setPoles((prev) => [...prev, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
    }, []);

    // Function to check if a point is inside a polygon (Ray-Casting Algorithm)
    const isPointInsidePolygon = (point, polygon) => {
        if (polygon.length < 3) return false; // A polygon must have at least 3 points

        let x = point.lat, y = point.lng;
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            let xi = polygon[i].lat, yi = polygon[i].lng;
            let xj = polygon[j].lat, yj = polygon[j].lng;

            let intersect = ((yi > y) !== (yj > y)) &&
                (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

            if (intersect) inside = !inside;
        }
        return inside;
    };

    // Filter poles inside the polygon
    const handleAnalyze = () => {
        if (polygonPath.length < 3) {
            alert("Please select at least 3 points to form a valid area.");
            return;
        }

        const detectedPoles = poles.filter(pole => isPointInsidePolygon(pole, polygonPath));

        // Navigate to results page with detected pole count
        navigate("/results", { state: { totalPoles: poles.length, detectedPoles: detectedPoles.length } });
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-3/4 mx-auto mt-10 text-center">
            <h2 className="text-xl font-bold mb-4">Interactive Map</h2>
            <LoadScript googleMapsApiKey="AIzaSyAQTz9g608QHKaA4CkDV3IovmzDPx7OBfo">
                <GoogleMap 
                    mapContainerStyle={containerStyle} 
                    center={defaultCenter} 
                    zoom={15} 
                    onClick={handleMapClick} 
                    onRightClick={handlePoleClick}
                >
                    {polygonPath.length > 0 && 
                        <Polygon paths={polygonPath} options={{ fillColor: "rgba(0, 0, 255, 0.3)", strokeColor: "blue" }} />
                    }
                    {poles.map((pole, index) => (
                        <Marker key={index} position={pole} label={`${index + 1}`} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <button 
                onClick={handleAnalyze} 
                className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition"
            >
                Analyze
            </button>
            <Link to="/" className="mt-4 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition">Back</Link>
        </div>
    );
};

export default MapComponent;
