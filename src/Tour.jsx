import { useState } from "react";

/* eslint-disable react/prop-types */
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button className="info-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "show more"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
