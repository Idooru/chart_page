const drawPieChart1 = () => {
  const pieLabels = ["income", "expense"];
  const pieData = [96, 4];
  const pieColors = ["rgb(250,105,0)", "rgb(6,54,140)"];
  const pieOptions = {
    responsive: false,
    layout: {
      padding: { left: 50, right: 50, top: 50, bottom: 50 },
    },
  };

  const needToChart = {
    type: "pie",
    data: {
      labels: pieLabels,
      datasets: [{ data: pieData, backgroundColor: pieColors }],
    },
    options: pieOptions,
  };

  return new Promise((resolve, reject) => {
    const $pieChart1 = $("#pie_chart_1");
    try {
      const chart = new Chart($pieChart1, needToChart);
      resolve(chart);
    } catch (err) {
      reject(err);
    }
  });
};

const drawPieChart2 = () => {
  const pieLabels = ["Apple", "Pecan", "Key Lime", "Cherry", "Coconut"];
  const pieData = [10, 10, 8, 4, 1];
  const pieColors = [
    "rgb(153,21,0)",
    "rgb(189,90,45)",
    "rgb(208,255,113)",
    "rgb(255,36,0)",
    "rgb(194,250,255)",
  ];
  const pieOptions = {
    responsive: false,
    layout: {
      padding: { left: 50, right: 50, top: 50, bottom: 50 },
    },
  };

  const needToChart = {
    type: "pie",
    data: {
      labels: pieLabels,
      datasets: [{ data: pieData, backgroundColor: pieColors }],
    },
    options: pieOptions,
  };

  return new Promise((resolve, reject) => {
    const $pieChart2 = $("#pie_chart_2");
    try {
      const chart = new Chart($pieChart2, needToChart);
      resolve(chart);
    } catch (err) {
      reject(err);
    }
  });
};

const drawPieChart3 = () => {
  const pieLabels = ["Apple", "Pecan", "Key Lime", "Cherry", "Coconut"];
  const pieData = [10, 10, 8, 4, 1];
  const pieColors = [
    "rgb(153,21,0)",
    "rgb(189,90,45)",
    "rgb(208,255,113)",
    "rgb(255,36,0)",
    "rgb(194,250,255)",
  ];
  const pieOptions = {
    responsive: false,
    layout: {
      padding: { left: 50, right: 50, top: 50, bottom: 50 },
    },
  };

  const needToChart = {
    type: "pie",
    data: {
      labels: pieLabels,
      datasets: [{ data: pieData, backgroundColor: pieColors }],
    },
    options: pieOptions,
  };

  return new Promise((resolve, reject) => {
    const $pieChart3 = $("#pie_chart_3");
    try {
      const chart = new Chart($pieChart3, needToChart);
      resolve(chart);
    } catch (err) {
      reject(err);
    }
  });
};

const drawHorizontalBarChart = () => {
  const data = {
    labels: ["항목 1", "항목 2", "항목 3", "항목 4"],
    datasets: [
      {
        label: "가로 막대 그래프",
        data: [30, 45, 20, 70],
        backgroundColor: "rgba(75, 192, 192, 0.2)", // 막대 색상
        borderColor: "rgba(75, 192, 192, 1)", // 막대 테두리 색상
        borderWidth: 1, // 막대 테두리 너비
      },
    ],
  };

  // 옵션 정의
  const options = {
    scales: {
      x: {
        beginAtZero: true, // x축이 0에서 시작하도록 설정
      },
    },
  };

  return new Promise((resolve, reject) => {
    const $horizontalBarChart = $("#horizontal_bar_chart");
    try {
      const chart = new Chart($horizontalBarChart, {
        type: "horizontalBar",
        data,
        options,
      });
      resolve(chart);
    } catch (err) {
      reject(err);
    }
  });
};

const init = async () => {
  const charts = await Promise.all([
    drawPieChart1(),
    drawPieChart2(),
    drawPieChart3(),
    drawHorizontalBarChart(),
  ]);
  charts.forEach((chart) => chart.render());
};

init();
