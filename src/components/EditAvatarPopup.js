import React from 'react';
import PopupWithForm from './PopupWithForm';
function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="avatar-input"
        required
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_card_link"
      />
      <span className="avatar-input-error popup__error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
