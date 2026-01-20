import { GeoJSON } from "react-leaflet";

const excavationStyle = {
  color: "#f59e0b",
  weight: 2,
  fillOpacity: 0.5
};

function ExcavationLayer({ data }) {
  if (!data) return null;
  return <GeoJSON data={data} style={excavationStyle} />;
}

export default ExcavationLayer;