import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmationPopup(props) {
  const { card, isOpen, onClose, onCardDelete } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirmation"
      submitBtnText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmationPopup;
