import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map: React.FC = () => {
    const position: [number, number] = [37.9546947,-122.089209]; // Latitude, Longitude
  return (
    <MapContainer 
    center={position}  // [latitude, longitude] 
    zoom={50} 
      className="h-[50vh] w-[100%] md:h-[40vh]"
    //   style={{ height: "50vw", width: "100%" }}
    >
      {/* OpenStreetMap Tiles */}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      {/* Marker at Specific Location */}
      <Marker position={position}>
        <Popup>📍 You are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
