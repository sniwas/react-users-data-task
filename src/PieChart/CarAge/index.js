import React from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";

export default function CarAge({ data }) {
  const carData = data.map((item) => item.vehicle);
  const carAges = carData.map((car) => car.age);
  const uniqueCarAges = [...new Set(carAges)];

  const carAgeCount = uniqueCarAges.map(
    (age) => carAges.filter((car) => car === age).length
  );

  const stateAge = {
    series: carAgeCount,
    options: {
      chart: {
        type: "pie",
      },
      labels: uniqueCarAges.map(
        (age, index) => `${age} years (${carAgeCount[index]})`
      ),
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
        height: "auto",
      },
      width: "100%",
    },
  };

  return (
    <div id="chart-age" className="chart-container">
      <h1>Car models on the basis of their Car Age</h1>
      <ReactApexChart
        options={stateAge.options}
        series={stateAge.series}
        type="pie"
        width="100%"
      />
    </div>
  );
}
