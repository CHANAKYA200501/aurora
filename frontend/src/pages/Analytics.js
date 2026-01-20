import KPISection from "../components/analytics/KPISection";
import ExcavationChart from "../components/analytics/ExcavationChart";
import ViolationSummary from "../components/analytics/ViolationSummary";

function Analytics() {
  return (
    <div style={{ padding: "20px", background: "#f8fafc", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "16px" }}>📊 Mining Activity Analysis</h2>

      <KPISection />
      <ExcavationChart />
      <ViolationSummary />
    </div>
  );
}

export default Analytics;