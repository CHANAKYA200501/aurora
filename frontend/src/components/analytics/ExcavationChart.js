const data = [
  { month: "Jan", area: 120 },
  { month: "Feb", area: 145 },
  { month: "Mar", area: 180 },
  { month: "Apr", area: 220 },
  { month: "May", area: 260 },
  { month: "Jun", area: 312 }
];

function ExcavationChart() {
  const maxArea = Math.max(...data.map(d => d.area));

  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "24px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h3>📈 Excavation Growth Over Time</h3>
      <p style={{ fontSize: "14px", color: "#64748b" }}>
        Shows cumulative excavation inside legal boundary
      </p>

      <svg width="100%" height="260" viewBox="0 0 600 260">
        {/* Axes */}
        <line x1="50" y1="20" x2="50" y2="220" stroke="#cbd5e1" />
        <line x1="50" y1="220" x2="560" y2="220" stroke="#cbd5e1" />

        {/* Line */}
        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          points={data
            .map((d, i) => {
              const x = 50 + i * (500 / (data.length - 1));
              const y = 220 - (d.area / maxArea) * 180;
              return `${x},${y}`;
            })
            .join(" ")}
        />

        {/* Points */}
        {data.map((d, i) => {
          const x = 50 + i * (500 / (data.length - 1));
          const y = 220 - (d.area / maxArea) * 180;
          return (
            <circle key={i} cx={x} cy={y} r="4" fill="#2563eb" />
          );
        })}

        {/* Labels */}
        {data.map((d, i) => {
          const x = 50 + i * (500 / (data.length - 1));
          return (
            <text
              key={i}
              x={x}
              y="245"
              textAnchor="middle"
              fontSize="12"
              fill="#475569"
            >
              {d.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default ExcavationChart;