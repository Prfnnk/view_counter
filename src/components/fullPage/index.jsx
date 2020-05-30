import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/style.scss";
import { useParams } from "react-router-dom";
import { newsArr } from "../mock";
import { wordEnds } from "../wordEnds";

const FullPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [views, setViews] = useState();

  useEffect(() => {
    const filteredArr = newsArr.filter((item) => item.id === id);
    if (filteredArr && filteredArr.length > 0) {
      setData(filteredArr[0]);
    }

    const random = Math.floor(Math.random() * 9 + 1);
    const item = localStorage.getItem(id);
    const newViews = Number(item) + random;

    localStorage.setItem(id, newViews);
    setViews(newViews);
  }, [id]);

  return (
    <div className="full">
      <Link to="/" className="arrow">
        &lt; Вернуться назад
      </Link>
      {data && views ? (
        <>
          <div className="full__pic">
            <img src={data.picture} alt={data.title} />
          </div>
          <div className="full__info">
            <div className="full__info-title">{data.title}</div>
            <div className="full__info-description">{data.description}</div>
            <div className="full__info-views">
              {views} просмотр{wordEnds(views, ["", "а", "ов"])}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default FullPage;
