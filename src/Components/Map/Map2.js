import * as React from 'react';
import ReactMapGL, { NavigationControl } from "react-map-gl";
const MAPBOX_TOKEN = "pk.eyJ1IjoidGFzYml1bG9saXZlIiwiYSI6ImNsMWx0NDlrNTBlM2IzbWw4eHI0cnkwNDUifQ.VifWktynW5gDheBEqNYspg";

const Map2 = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
 const navControlStyle = {
   right: 10,
   bottom: 10,
 };
  return (
    <ReactMapGL
     {...viewport}
     width="100vw"
     height="100vh"
     onViewportChange={setViewport}
     mapboxApiAccessToken={MAPBOX_TOKEN}
     mapStyle="mapbox://styles/mapbox/dark-v9"
   >
     <NavigationControl
       style={navControlStyle}
       showCompass={true}
       showZoom={true}
     />
   </ReactMapGL>
  );
}
export default Map2;