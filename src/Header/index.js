import React, { useState } from "react";
import "./HeaderStyles.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMenu = () => {
    setIsModalOpen(true);
  };

  const closeMenu = () => {
    setIsModalOpen(false);
  };

  return (
    <header id="page-header" className="custom-header">
      <a className="flex items-center gap-3 hover-custom-text" href="/">
        <h1 className="sr-only">QuantumDrive Motors </h1>
      </a>
      <div>
        <div className="flex items-center gap-6">
          <nav className="nav-bar-menu-style">
            <ul className="flex items-center gap-6">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/pie-chart">Pie Chart</a>
              </li>
              <li>
                <a href="/users-list">Users Data</a>
              </li>
              <li>
                <a href="/car-list">Car List</a>
              </li>
            </ul>
          </nav>
          <div className=" flex flex-row gap-4">
            <button
              id="open-nav-button"
              type="button"
              className="btn svg-styles nav-button-style"
              aria-label="Navigation"
              onClick={openMenu}
            >
              <svg viewBox="0 0 24 24" fill="#000" height="2em" width="2em">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="menu-modal"
          className={`modal ${isModalOpen ? "visible" : "hidden"}`}
        >
          <div className="custom-modal">
            <div className="custom-modal-content">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                  <h1>QuantumDrive Motors</h1>
                  <button
                    id="close-nav-button"
                    type="button"
                    className="btn svg-styles"
                    aria-label="Close navigation"
                    onClick={closeMenu}
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="#000"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col items-start justify-between py-3">
                  <ul className="flex flex-col gap-4 text-black font-bold">
                    <li>
                      <a href="/" className="custom-nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/pie-chart" className="custom-nav-link">
                        Pie Chart
                      </a>
                    </li>
                    <li>
                      <a href="/users-list" className="custom-nav-link">
                        Users Data
                      </a>
                    </li>
                    <li>
                      <a href="/car-list" className="custom-nav-link">
                        Car List
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
