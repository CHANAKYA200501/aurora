import { useEffect, useState } from "react";
import { fetchTimeSeries } from "../services/api";

function TimeSeriesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTimeSeries().then(res => setData(res.data));
  }, []);

  return (
    <div className="chart">
      <h4>Excavated Area Over Time</h4>

      <svg width="300" height="120">
        {data.map((d, i) => (
          <circle
            key={i}
            cx={20 + i * 25}
            cy={100 - d.area}
            r="4"
            fill="#2563eb"
          />
        ))}
      </svg>
    </div>
  );
}

export default TimeSeriesChart;