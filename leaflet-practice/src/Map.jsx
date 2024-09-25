import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import './map.css'
import 'leaflet/dist/leaflet.css'
import { useEffect } from "react";
import { map } from "leaflet";
const Map = () => {
  return (
    <MapContainer
      className="map-container"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
