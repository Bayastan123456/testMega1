import React from "react";
import icon from "../../images/strelka.svg";
import "./modal.css";
const Modal = ({ isDarkMode }) => {
  const time = new Date();
  return (
    <div className={isDarkMode ? "modal" : "modal modal__bg"}>
      <p>История посшение</p>
      <p>
        Безопасность и вход
        <img src={icon} alt="icon" className="modal__icon" />
      </p>
      <p>Выйти</p>
      <span>Ваш последний визит: {time.toLocaleString()}</span>
      <span>Петрова Наталья Владимировна</span>
      <span>
        Под вашим аккаунтом можете
        <strong>
          {" "}
          создавать, изменять. подписывать и отправлять транзакции.
        </strong>
      </span>
    </div>
  );
};

export default Modal;
