import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BarChart from './BarChart';
import PieChart from "./PieChart";
import UserList from "./UsersList";
import CarData from "./CarData";
import FakerData from "./Faker";
const data = FakerData(100000);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App data={data} />} />
      {/* <Route path='/bar-chart' element={<BarChart data={data}/>}/> */}
      <Route path="/pie-chart" element={<PieChart data={data} />} />
      <Route path="/users-list" element={<UserList data={data} />} />
      <Route path="/car-list" element={<CarData data={data} />} />
    </Routes>
  </Router>
);

reportWebVitals();
