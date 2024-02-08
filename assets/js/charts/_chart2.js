const data = {
  labels: [
    "Transport",
    "Batiments",
    "Agriculture",
    "Industrie",
    "Déchets",
    "Production d'énérgie",
  ],
  datasets: [
    {
      label: "Consomation :  %",
      data: [29, 19, 19, 18, 4, 11],
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
        text: "Répartition des émissions de CO2 par secteur",
        font: {
          size: 18,
          family: "Montserrat",
        },
      },
      legend: {
        display: true,
        position: "right",
      },
    },
  },
});
