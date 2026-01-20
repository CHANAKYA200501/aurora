import { useNavigate } from "react-router-dom";

function FeatureCard({ title, desc, icon }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        textAlign: "center",
        flex: 1
      }}
    >
      <div style={{ fontSize: "36px" }}>{icon}</div>
      <h3 style={{ marginTop: "12px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#475569" }}>{desc}</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>
          Aurora 2.0 – Beyond the Horizon
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "20px auto",
            fontSize: "18px",
            color: "#cbd5f5"
          }}
        >
          An AI-powered geospatial monitoring platform for detecting illegal and
          excessive mining using Sentinel-2 satellite time-series data.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => navigate("/map")}
            style={ctaPrimary}
          >
            🌍 Explore Live Map
          </button>

          <button
            onClick={() => navigate("/analytics")}
            style={ctaSecondary}
          >
            📊 View Analytics
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
          color: "#0f172a"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            display: "flex",
            gap: "20px"
          }}
        >
          <FeatureCard
            icon="🧠"
            title="Adaptive AI Detection"
            desc="Learns mine-specific excavation signatures without hard-coded thresholds."
          />

          <FeatureCard
            icon="⚠️"
            title="No-Go Zone Violation Alerts"
            desc="Automatically detects and flags encroachment into protected zones."
          />

          <FeatureCard
            icon="📈"
            title="Temporal Mining Analytics"
            desc="Tracks excavation growth, rate, and trends over time."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "13px",
          color: "#94a3b8"
        }}
      >
        Built for AURORA 2.0 Hackathon | Sentinel-2 • Geospatial AI • VEDAS • ISRO
      </footer>
    </div>
  );
}

const ctaPrimary = {
  padding: "12px 24px",
  fontSize: "16px",
  background: "#2563eb",
  border: "none",
  color: "white",
  borderRadius: "8px",
  marginRight: "12px",
  cursor: "pointer"
};

const ctaSecondary = {
  ...ctaPrimary,
  background: "#1e293b"
};

export default Home;