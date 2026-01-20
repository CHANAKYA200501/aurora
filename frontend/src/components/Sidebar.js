function Sidebar({
  showMines,
  setShowMines,
  showNoGo,
  setShowNoGo,
  showViolations,
  setShowViolations,
  showExcavation,
  setShowExcavation
}) {
  return (
    <div className="sidebar">
      <h4>Layers</h4>

      <label>
        <input
          type="checkbox"
          checked={showMines}
          onChange={() => setShowMines(!showMines)}
        />
        Legal Mine Boundaries
      </label>

      <label>
        <input
          type="checkbox"
          checked={showNoGo}
          onChange={() => setShowNoGo(!showNoGo)}
        />
        No-Go Zones
      </label>

      <label>
        <input
          type="checkbox"
          checked={showViolations}
          onChange={() => setShowViolations(!showViolations)}
        />
        No-Go Violations
      </label>

      <label>
        <input
          type="checkbox"
          checked={showExcavation}
          onChange={() => setShowExcavation(!showExcavation)}
        />
        ML Excavation
      </label>
    </div>
  );
}

export default Sidebar;