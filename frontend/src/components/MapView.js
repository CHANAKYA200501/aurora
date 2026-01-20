import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";

import {
  fetchMines,
  fetchNoGo,
  fetchViolations,
  fetchExcavation
} from "../services/api";

import Sidebar from "./Sidebar";
import Stats from "./Stats";
import ViolationLayer from "./ViolationLayer";
import ExcavationLayer from "./ExcavationLayer";
import TimeSeriesChart from "./TimeSeriesChart";

const mineStyle = { color: "green", weight: 2 };
const nogoStyle = { color: "gray", weight: 1 };

function MapView() {
  // ---------------- DATA ----------------
  const [mines, setMines] = useState(null);
  const [nogo, setNoGo] = useState(null);
  const [violations, setViolations] = useState(null);
  const [excavation, setExcavation] = useState(null);

  // ---------------- LAYER TOGGLES ----------------
  const [showMines, setShowMines] = useState(true);
  const [showNoGo, setShowNoGo] = useState(true);
  const [showViolations, setShowViolations] = useState(true);
  const [showExcavation, setShowExcavation] = useState(true);

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    fetchMines()
      .then(r => setMines(r.data))
      .catch(err => console.error("MINES ERROR", err));

    fetchNoGo()
      .then(r => setNoGo(r.data))
      .catch(err => console.error("NOGO ERROR", err));

    fetchViolations()
      .then(r => setViolations(r.data))
      .catch(err => console.error("VIOLATION ERROR", err));

    fetchExcavation()
      .then(r => setExcavation(r.data))
      .catch(err => console.error("EXCAVATION ERROR", err));
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Sidebar
        showMines={showMines}
        setShowMines={setShowMines}
        showNoGo={showNoGo}
        setShowNoGo={setShowNoGo}
        showViolations={showViolations}
        setShowViolations={setShowViolations}
        showExcavation={showExcavation}
        setShowExcavation={setShowExcavation}
      />

      <Stats />
      <TimeSeriesChart />

      <MapContainer center={[23.5, 78.9]} zoom={5} style={{ height: "90vh" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {showMines && mines && (
          <GeoJSON data={mines} style={mineStyle} />
        )}

        {showNoGo && nogo && (
          <GeoJSON data={nogo} style={nogoStyle} />
        )}

        {showViolations && (
          <ViolationLayer data={violations} />
        )}

        {showExcavation && (
          <ExcavationLayer data={excavation} />
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;