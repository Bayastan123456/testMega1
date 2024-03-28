import React from "react";
import "./home.css";
const Home = () => {
  return (
    <main>
      <input type="text" placeholder="Я ищу" className="dark-input" />
      <div className="main__katalog">
        <p>Рассрочка</p>
        <p>Карты</p>
        <p>Кредиты</p>
        <p>Депозиты</p>
        <p>Акции</p>
        <p>Бонусы</p>
      </div>
    </main>
  );
};

export default Home;
