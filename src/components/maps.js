import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./maps.css";
import whiteicon from "../assets/icons8-marker-100.png";

const whiteMarkerIcon = new L.Icon({
  iconUrl: whiteicon,
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
  iconSize: [40, 41], 
  iconAnchor: [25, 41], 
});

const Maps = () => {
  const center = useMemo(
    () => [40.37267989298491, 49.83517694722005], 
    []
  );

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={18}
        className="map-container"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={whiteMarkerIcon}>
          <Popup>Baku, Azerbaijan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;