import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmationPopup() {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirmation"
      submitBtnText="Да"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

export default ConfirmationPopup;
