import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./styles.css";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const itemsPerPage = 10;
const displayPageNumbers = 5;

export default function BarChart({ data }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const countries = data.reduce((counts, { country, name, ...userData }) => {
    if (!counts[country]) {
      counts[country] = { count: 0, users: [] };
    }
    counts[country].count += 1;
    counts[country].users.push({ name, ...userData });
    return counts;
  }, {});

  const countryBarData = Object.entries(countries).map(
    ([location, { count, users }]) => ({
      location,
      count,
      users,
    })
  );

  const chart = {
    labels: countryBarData.map(({ location }) => location),
    datasets: [
      {
        label: "User Count",
        data: countryBarData.map(({ count }) => count),
        backgroundColor: " rgb(252 202 202)",
        borderColor: "rgb(239 68 68)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const clickedCountry = countryBarData[elements[0].index];
        setSelectedCountry(clickedCountry);
        setCurrentPage(1);
      }
    },
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectedCountry?.users.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(selectedCountry?.users.length / itemsPerPage);
  const startPage = Math.max(
    1,
    currentPage - Math.floor(displayPageNumbers / 2)
  );
  const endPage = Math.min(startPage + displayPageNumbers - 1, totalPages);

  return (
    <div>
      <h1>User Distribution by Country</h1>
      <Bar data={chart} options={options} />
      {selectedCountry && (
        <div className="selected-country">
          <h2>{`Users in ${selectedCountry.location}`}</h2>

          <div className="countries-list">
            {currentItems.map((user, index) => (
              <div key={index} className="country-item">
                {indexOfFirstItem + index + 1}
                {".  "}
                {user?.name}
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
              <button
                key={startPage + index}
                onClick={() => handlePageChange(startPage + index)}
                style={{
                  backgroundColor:
                    startPage + index === currentPage ? "yellow" : "",
                }}
              >
                {startPage + index}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
