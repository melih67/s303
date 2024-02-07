const ctx = document.getElementById("chart3").getContext("2d");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Nombre de véhicules neufs électriques vendu en France",
        data: [22857, 29179, 36778, 45587, 61356, 185499, 303100, 459212],
        backgroundColor: "#009933",
        borderColor: "#009933",
      },
      {
        label: "Part de marché totale",
        data: [1.19, 1.45, 1.74, 2.1, 2.7, 11.2, 18.3, 22],
        backgroundColor: "#ff9900",
        borderColor: "#ff9900",
        type: "line",
        yAxisID: "y-axis-2",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          id: "y-axis-1",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          id: "y-axis-2",
          type: "linear",
          position: "right",
          ticks: {
            beginAtZero: true,
            max: 20,
          },
        },
      ],
    },
  },
});
