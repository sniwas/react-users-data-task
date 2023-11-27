import Header from "../Header";
import CarAge from "./CarAge";
import CarMaker from "./CarMaker";
import ModelAndAgeFilter from "./ModelAndAgeFilter";
import "./style.css";
import { useState } from "react";

export default function DynamicChart({ data }) {
  const [selectedChart, setSelectedChart] = useState("carAge");

  const handleButtonClick = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "screen" }}>
      <Header />
      <div className="chart-container" style={{ flexDirection: "row" }}>
        <button
          className={selectedChart === "carAge" ? "active" : ""}
          onClick={() => handleButtonClick("carAge")}
        >
          Car Age
        </button>
        <button
          className={selectedChart === "carManufacturer" ? "active" : ""}
          onClick={() => handleButtonClick("carManufacturer")}
        >
          Car Manufacturer
        </button>
        <button
          className={selectedChart === "modelVsAge" ? "active" : ""}
          onClick={() => handleButtonClick("modelVsAge")}
        >
          Model vs Age
        </button>
      </div>
      <div>
        {selectedChart === "carAge" && <CarAge data={data} />}
        {selectedChart === "carManufacturer" && <CarMaker data={data} />}
        {selectedChart === "modelVsAge" && <ModelAndAgeFilter data={data} />}
      </div>
    </div>
  );
}
