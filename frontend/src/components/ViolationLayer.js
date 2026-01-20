import { GeoJSON } from "react-leaflet";

const violationStyle = {
  color: "red",
  weight: 3,
  fillOpacity: 0.6
};

function ViolationLayer({ data }) {
  if (!data) return null;
  return <GeoJSON data={data} style={violationStyle} />;
}

export default ViolationLayer;