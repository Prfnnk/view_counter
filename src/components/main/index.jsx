import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/style.scss";
import { newsArr } from "../mock";

const MainPage = () => {
  const [number, setNumber] = useState();

  const setInitialViews = () => {
    for (let item of newsArr) {
      localStorage.setItem(item.id, number);
    }
    alert(`Для всех страниц установлено количество просмотров: ${number}`);
    setNumber("");
  };

  const clearViews = () => {
    localStorage.clear();
    alert("Просмотры сброшены");
  };

  return (
    <>
      <div className="main">
        {newsArr.map((item) => {
          return (
            <Link
              to={`/article/${item.id}`}
              key={item.id}
              className="main__item"
            >
              <div className="main__item-pic">
                <img src={item.picture} alt={item.title} />
              </div>
              <div className="main__item-info">
                <div className="main__item-title">{item.title}</div>
                <div className="main__item-description">{item.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="main__set">
        <div className="main__set-title">
          Задать минимальное количество просмотров:
        </div>
        <div className="main__set-input">
          <input
            type="number"
            placeholder="Задайте число"
            min={0}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={() => setInitialViews()} disabled={!number}>
            Задать
          </button>
        </div>
        <button onClick={() => clearViews()}>Сбросить просмотры</button>
      </div>
    </>
  );
};
export default MainPage;
