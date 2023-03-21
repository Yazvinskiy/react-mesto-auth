import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace, isLoader, onLoading } = props;
  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  function handleChangeName(e) {
    setCardName(e.target.value);
  }

  function handleChangeLink(e) {
    setCardLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    onLoading();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      submitBtnText={isLoader ? 'Создать' : 'Создать...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoader={isLoader}
    >
      <input
        value={cardName}
        onChange={handleChangeName}
        id="placename-input"
        required
        name="name"
        type="text"
        minLength={2}
        maxLength={30}
        placeholder="Название"
        className="popup__input popup__input_card_title"
      />
      <span className="placename-input-error popup__error" />
      <input
        value={cardLink}
        onChange={handleChangeLink}
        id="placelink-input"
        required
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_card_link"
      />
      <span className="placelink-input-error popup__error" />
    </PopupWithForm>
  );
}
export default AddPlacePopup;
