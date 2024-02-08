const data = {
  labels: [
    "Transport",
    "Bâtiments",
    "Agriculture",
    "Industrie",
    "Déchets",
    "Production d'énergie",
  ],
  datasets: [
    {
      label: "Consommation :  %",
      data: [29, 19, 19, 18, 4, 11],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
    },
  ],
};

const ctx = document.getElementById("chart2");

const chart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Répartition des émissions de CO2 par secteur en %",
        font: {
          size: 25,
          family: "Montserrat",
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 18,
            family: "Montserrat",
          },
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
        formatter: (value, context) => {
          return `${value}%`;
        },
      },
    },
  },
  plugins: [ChartDataLabels], // Assurez-vous d'enregistrer le plugin ici
});
