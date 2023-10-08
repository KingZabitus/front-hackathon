// Dados do gráfico de pizza (exemplo)
let data = {
    labels: ["Categoria A", "Categoria B", "Categoria C"],
    datasets: [
      {
        data: [30, 40, 50], // Valores dos segmentos
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Cores dos segmentos
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Cores quando o mouse passa por cima
      },
    ],
  };

  // Opções de configuração do gráfico (opcional)
  let options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Obtenha o contexto do elemento canvas
  let ctx = document.getElementById("myPieChart").getContext("2d");

  // Crie o gráfico de pizza
  let myPieChart = new Chart(ctx, {
    type: "pie",
    data: data,
    options: options,
  });

  // Dados do gráfico de barras (exemplo)
let dataBar = {
    labels: ["Categoria A", "Categoria B", "Categoria C", "Categoria D"],
    datasets: [
      {
        label: "Valores",
        data: [10, 30, 20, 40], // Valores das barras
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Cores das barras
        borderWidth: 1, // Largura da borda das barras
      },
    ],
  };

  // Opções de configuração do gráfico (opcional)
  let optionsBar = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Obtenha o contexto do elemento canvas
  var ctxBar = document.getElementById("myBarChart").getContext("2d");

  // Crie o gráfico de barras
  var myBarChart = new Chart(ctxBar, {
    type: "bar",
    data: data,
    options: options,
  });