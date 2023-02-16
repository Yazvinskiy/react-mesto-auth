import React from 'react';
function Card(props) {
  const { card, onCardClick } = props;

  function handleClick() {
    onCardClick(props.card);
  }

  return (
    <div className="places__card">
      <img
        className="places__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button type="button" className="places__icon-basket " />
      <div className="places__content">
        <h2 className="places__title">{card.name}</h2>
        <div>
          <button type="button" className="places__icon-like" />
          <div className="places__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
