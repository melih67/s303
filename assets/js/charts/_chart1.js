const data = {
  labels: [
    "0 à 1km",
    "1 à 2km",
    "2 à 5km",
    "5 à 10km",
    "10 à 20km",
    "20 à 35km",
    "35 à 50km",
    "plus de 50km",
  ],
  datasets: [
    {
      label: "% de voiture utilisé en fonction de la distance",
      data: [4, 11, 26, 21, 20, 11, 4, 3],
      backgroundColor: "#ff7037",
    },
  ],
};

const ctx = document.getElementById("chart1");

const chart = new Chart(ctx, {
  type: "bar",
  data: data,
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