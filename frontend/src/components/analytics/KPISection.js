function KPI({ label, value, color, icon }) {
  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        flex: 1,
        borderLeft: `6px solid ${color}`
      }}
    >
      <div style={{ fontSize: "20px" }}>{icon}</div>
      <h4 style={{ margin: "6px 0", color: "#475569" }}>{label}</h4>
      <h2 style={{ marginTop: "4px" }}>{value}</h2>
    </div>
  );
}

function KPISection() {
  // 🔁 Replace with API values later
  const totalMines = 12;
  const totalExcavation = "312 ha";
  const noGoViolations = 3;
  const excavationRate = "12.4 ha / month";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginBottom: "24px"
      }}
    >
      <KPI
        icon="⛏️"
        label="Total Mines Detected"
        value={totalMines}
        color="#0ea5e9"
      />

      <KPI
        icon="📐"
        label="Total Excavated Area"
        value={totalExcavation}
        color="#2563eb"
      />

      <KPI
        icon="⚠️"
        label="No-Go Violations"
        value={noGoViolations}
        color="#dc2626"
      />

      <KPI
        icon="📈"
        label="Excavation Rate"
        value={excavationRate}
        color="#16a34a"
      />
    </div>
  );
}

export default KPISection;