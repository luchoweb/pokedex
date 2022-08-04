import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  const charts = {
    labels: [],
    datasets: [
      {
        label: 'Stats',
        data: [],
        backgroundColor: 'rgba(207, 153, 102, 0.2)',
        borderColor: 'rgba(207, 153, 102, 1)',
        borderWidth: 1,
      },
    ],
  };

  data.map(item => {
    charts.labels.push(item.stat.name);
    charts.datasets[0].data.push(item.base_stat);
  });

  return <Radar data={charts} />;
}

export default RadarChart;