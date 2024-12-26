import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Plus, Minus } from "lucide-react";

// Fix for default marker icon in React Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";
import "../Contact/MapStyle.css"
// Custom zoom control component that updates map zoom
const MapZoomControl = ({ zoomLevel }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setZoom(zoomLevel);
  }, [zoomLevel, map]);
  return null;
};

const ResponsiveMap = () => {
  const [zoomLevel, setZoomLevel] = useState(13);
  const position = [51.505, -0.09];

  // Custom marker icon setup
  const defaultIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Zoom handlers
  const handleZoomIn = () => {
    if (zoomLevel < 18) {
      setZoomLevel(prev => prev + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 5) {
      setZoomLevel(prev => prev - 1);
    }
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative p-12">
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-lg">
        {/* Custom Zoom Controls */}
        <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Zoom in"
          >
            <Plus className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Zoom out"
          >
            <Minus className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <MapContainer
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          className="w-full h-full"
          zoomControl={false} // Disable default zoom control
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={defaultIcon}>
            <Popup className="rounded-lg">
              <div className="p-2">
                <h3 className="font-semibold mb-1">Location Name</h3>
                <p className="text-sm text-gray-600">
                  Custom description goes here
                </p>
              </div>
            </Popup>
          </Marker>
          <MapZoomControl zoomLevel={zoomLevel} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ResponsiveMap;