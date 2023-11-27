import React from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";

export default function CarMaker({ data }) {
  const carData = data.map((item) => item.vehicle);
  const carMakers = carData.map((car) => car.make);
  const uniqueCarMakers = [...new Set(carMakers)];

  const carMakerCount = uniqueCarMakers.map(
    (maker) => carMakers.filter((car) => car === maker).length
  );

  const state = {
    series: carMakerCount,
    options: {
      chart: {
        type: "pie",
      },
      labels: uniqueCarMakers.map(
        (maker, index) => `${maker} (${carMakerCount[index]})`
      ),
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
      },
      width: "200%",
    },
  };

  return (
    <div id="chart" className="chart-container">
      <h1>Car models on the basis of their Car Maker</h1>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width="100%"
      />
    </div>
  );
}
