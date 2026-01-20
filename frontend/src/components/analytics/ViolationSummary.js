function ViolationSummary() {
  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h3>⚠️ No-Go Zone Violations</h3>

      <ul style={{ fontSize: "14px", marginTop: "12px" }}>
        <li>Forest buffer encroachment – 1.2 ha (Jan 2025)</li>
        <li>River protection zone – 0.6 ha (Mar 2025)</li>
        <li>Habitation buffer – 0.4 ha (Apr 2025)</li>
      </ul>
    </div>
  );
}

export default ViolationSummary;