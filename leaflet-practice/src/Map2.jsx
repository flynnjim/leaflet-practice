import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import { useState } from "react";
// map at your location and gets thelat and long

const Map2 = () => {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [latLong, setLatLong] = useState({ lat: null, lng: null });

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        setLatLong({ lat: e.latlng.lat, lng: e.latlng.lng });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <>
        <Marker position={position}>
          <Popup>
            You are here
            <div className="coordinates-display">
              <p>Latitude: {latLong.lat}</p>
              <p>Longitude: {latLong.lng}</p>
            </div>
          </Popup>
        </Marker>
      </>
    );
  }

  return (
    <>
      <br />
      <br />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default Map2;
