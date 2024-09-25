import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './map.css';
import 'leaflet/dist/leaflet.css';
import PopupContainer from "./PopupContainer";

const hiddenGems = [
  [51.49, -0.08,'Location 1', 10, 'https://wikipedia.com/'], 
  [51.5, -0.06, 'Location 2', 5, 'https://wikipedia.com/'], 
  [51.5, -0.08, 'Location 3', 7, 'https://wikipedia.com/']
];

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
      

      {hiddenGems.map((gem, index) => {
        const [lat, lng, name, votes, link] = gem; 
        return (
          <Marker key={index} position={[lat, lng]}>
            <Popup>{name}, number of votes {votes}
                <br/>
                <a href={link} target="_blank">
                More info
              </a>
            </Popup>
          </Marker>
        );
      })}

    </MapContainer>
  );
};

export default Map;
