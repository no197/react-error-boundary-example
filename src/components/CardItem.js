import React from "react";

const CardItem = ({ item }) => {
  const { image, productName, organic, quantity, price } = item;
  return (
    <figure className="card">
      <div className="card__emoji">
        {image}
        {image}
      </div>

      <div className="card__title-box">
        <h2 className="card__title">{productName}</h2>
      </div>

      <div className="card__details">
        {organic && (
          <div className="card__detail-box">
            <h6 className="card__detail card__detail--organic">Organic!</h6>
          </div>
        )}

        <div className="card__detail-box">
          <h6 className="card__detail">{`${quantity} per 📦`}</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{`${price}€`}</h6>
        </div>
      </div>

      <a className="card__link" href="#">
        <span>
          Detail <i className="emoji-right">👉</i>
        </span>
      </a>
    </figure>
  );
};

export default CardItem;
