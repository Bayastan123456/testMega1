import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import kolokol from "../../images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg";
import kolokol__black from "../../images/kookol black.svg";
import moon from "../../images/moon.svg";
import moon__black from "../../images/moon yellow.svg";
import Modal from "../modal/Modal";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const theme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className={isDarkMode ? "dark" : "nav__bg"}>
      <img src={logo} alt="error" />
      <div className="nav__icons">
        <div className="kolokol__block">
          <span>0</span>
          {isDarkMode ? (
            <img src={kolokol__black} alt="error" />
          ) : (
            <img src={kolokol} alt="error" />
          )}
        </div>
        {isDarkMode ? (
          <img src={moon__black} onClick={toggleTheme} alt="error" />
        ) : (
          <img src={moon} onClick={toggleTheme} alt="error" />
        )}
        <h4 onClick={toggleModal}>И</h4>
        <p>Иванов Иван Иванович</p>
      </div>
      {isModalOpen && <Modal isDarkMode={isDarkMode} />}
    </nav>
  );
};

export default Navbar;
