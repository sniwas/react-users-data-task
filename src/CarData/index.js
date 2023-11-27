import React, { useState } from "react";
import "./style.css";
import Header from "../Header";

const CarData = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersCurrentPage, setUsersCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState();
  const carsPerPage = 10;
  const itemsPerPage = 10;
  const displayPageNumbers = 5;

  const uniqueCars = [...new Set(data.map((car) => car.vehicle.name))];
  const totalCars = uniqueCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const indexOfLastCar = currentPage * carsPerPage;
  const currentCars = uniqueCars.slice(
    indexOfLastCar - carsPerPage,
    indexOfLastCar
  );

  const totalUserPages = Math.ceil(
    selectedUsers?.usersWithCar.length / itemsPerPage
  );
  const startUserPage = Math.max(
    1,
    usersCurrentPage - Math.floor(displayPageNumbers / 2)
  );
  const endUserPage = Math.min(
    startUserPage + displayPageNumbers - 1,
    totalUserPages
  );

  const handleCarClick = (carName) => {
    const usersWithCar = data
      .filter((user) => user.vehicle.name === carName)
      .map((user) => user.name);
    setSelectedUsers({ carName, usersWithCar });
    setUsersCurrentPage(1);
  };

  const handlePageChange = (newPage) => setUsersCurrentPage(newPage);

  const renderPageNumbers = () => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(displayPageNumbers / 2)
    );
    const endPage = Math.min(startPage + displayPageNumbers - 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => (
      <span
        key={startPage + index}
        onClick={() => setCurrentPage(startPage + index)}
        style={{
          cursor: "pointer",
          margin: "0 1px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "0 5px",
          fontWeight: startPage + index === currentPage ? "bold" : "normal",
          backgroundColor: startPage + index === currentPage ? "yellow" : "",
        }}
      >
        {startPage + index}
      </span>
    ));
  };

  const indexOfLastItem = usersCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectedUsers?.usersWithCar.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <div
        style={{
          display: "flex",
          margin: "0px auto",
          justifyContent: "center",
        }}
      >
        <div className="car-data-container" style={{ margin: "0px 30px" }}>
          <h1>List of cars</h1>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="car-list">
              {currentCars.map((carName, index) => (
                <div
                  key={index}
                  className="car-item"
                  style={{
                    backgroundColor:
                      selectedUsers?.carName === carName ? "aqua" : "",
                  }}
                  onClick={() => handleCarClick(carName)}
                >
                  {carName}
                </div>
              ))}
            </div>
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastCar >= totalCars}
            >
              Next
            </button>
          </div>

          {selectedUsers && (
            <div className="selected-users">
              <div>
                <h1>Users holding</h1>
                <h2>"{selectedUsers.carName}"</h2>
                <div className="users-list">
                  {currentItems.map((user, index) => (
                    <div key={index} className="user-item">
                      {indexOfFirstItem + index + 1}
                      {".  "}
                      {user}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pagination">
                {Array.from(
                  { length: endUserPage - startUserPage + 1 },
                  (_, index) => (
                    <button
                      key={startUserPage + index}
                      onClick={() => handlePageChange(startUserPage + index)}
                      style={{
                        backgroundColor:
                          startUserPage + index === usersCurrentPage
                            ? "yellow"
                            : "",
                      }}
                    >
                      {startUserPage + index}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarData;
