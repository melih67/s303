const ctx = document.getElementById("chart");

const chart = new Chart(ctx, {
  type: "bar",
  data: window.data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      // Configuration pour chartjs-plugin-datalabels
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value, context) => {
          return value + "%"; // Ajoute '%' après chaque valeur
        },
        color: "#444", // Couleur du texte des étiquettes
      },
    },
  },
  plugins: [ChartDataLabels], // Assurez-vous d'enregistrer le plugin ici
});
