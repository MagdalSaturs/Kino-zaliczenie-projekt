"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function MovieChart() {
  const data = {
    labels: ["Tajemnica Podziemi", "Kosmiczna Przygoda", "Hunter x Hunter", "Black Clover", "SheRa", "Pokémon", "Alexa & Katie", "Avatar: Ogień i popiół", "Spider-Man", "Jak wytresować smoka"],
    datasets: [
      {
        label: "Popularność (liczba zakupów)",
        data: [12, 7, 33, 58, 45, 30, 25, 40, 29, 11],
        backgroundColor: ["#38bdf8", "#818cf8", "#008507", "#85002c", "#db00d4", "#0016db", "#daeb1e", "#eb1e1e", "#eba031", "#992ade"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
      },
      y: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="p-6 rounded-lg border border-slate-800 bg-slate-900">
      <h2 className="text-xl font-semibold mb-4">Popularność filmów</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
