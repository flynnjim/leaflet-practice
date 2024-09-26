import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import Map from "./Map";
import Map2 from "./Map2";
import MapVector from "./MapVector";
import ImageOverlayMap from "./ImageOverlayMap";
import LayersFeatureGroupMap from "./LayersFeatureGroupMap";

function App() {
  return (
    <>
      <Map />
      <Map2 />
      <MapVector />
      <ImageOverlayMap />
      <LayersFeatureGroupMap/>
    </>
  );
}

export default App;
