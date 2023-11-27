import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./style.css";

export default function FilterModelandAge({ data }) {
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const ageRanges = [
    { label: "20-25", start: 20, end: 25 },
    { label: "25-30", start: 25, end: 30 },
    { label: "30-35", start: 30, end: 35 },
    { label: "35-40", start: 35, end: 40 },
    { label: "40-45", start: 40, end: 45 },
    { label: "45-50", start: 45, end: 50 },
    { label: "50-55", start: 50, end: 55 },
    { label: "55-60", start: 55, end: 60 },
    { label: "60-65", start: 60, end: 65 },
    { label: "65-70", start: 65, end: 70 },
    { label: "70-75", start: 70, end: 75 },
    { label: "75-80", start: 75, end: 80 },
  ];

  const handleAgeRangeChange = (range) => {
    setSelectedAgeRange(range);
  };

  useEffect(() => {
    if (!selectedAgeRange) {
      setFilteredData(data);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.age >= selectedAgeRange.start && item.age <= selectedAgeRange.end
      );
      setFilteredData(filteredData);
    }
  }, [selectedAgeRange, data]);

  const filteredCarData = filteredData.map((item) => item.vehicle);

  const carMakes = filteredCarData.map((car) => car.make);
  const uniqueCarMakes = [...new Set(carMakes)];
  const carMakeCounts = uniqueCarMakes.map(
    (make) => carMakes.filter((car) => car === make).length
  );

  const carMakeChartOptions = {
    series: carMakeCounts,
    options: {
      chart: {
        type: "pie",
      },
      labels: uniqueCarMakes.map(
        (make, index) => `${make} (${carMakeCounts[index]})`
      ),
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <div>
        <h2>Filter by Age Range:</h2>
        <select
          onChange={(e) => handleAgeRangeChange(ageRanges[e.target.value])}
        >
          <option value={-1}>Select Age Range</option>
          {ageRanges.map((range, index) => (
            <option key={index} value={index}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
      <div id="chart" className="chart-container">
        <h1>Car models on the basis of their Car Age</h1>
        <ReactApexChart
          options={carMakeChartOptions.options}
          series={carMakeChartOptions.series}
          type="pie"
          width="100%"
        />
      </div>
    </div>
  );
}
