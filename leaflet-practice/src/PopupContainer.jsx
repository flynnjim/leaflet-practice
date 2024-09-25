import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const PopupContainer= ({latitude, longitude, message}) => {
  // console.log(latitude, longitude, message);
  console.log(latitude, longitude);
  

  if (latitude == null || longitude == null) {
    // console.log("HELLO");
    
    return null; 
  }
  
    return (
      <Marker position={[latitude, longitude]}>
          {console.log(latitude, longitude)}
        <Popup>
          North of the bridge <br /> Easily customizable.
        </Popup>
      </Marker>
    )
}

export default PopupContainer