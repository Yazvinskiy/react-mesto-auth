import React from 'react';
import PopupWithForm from './PopupWithForm';
function AddPlacePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      submitBtnText=" Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
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
