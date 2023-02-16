import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="username-input"
        required
        name="name"
        type="text"
        minLength={2}
        maxLength={40}
        placeholder="Имя"
        className="popup__input popup__input_user_name"
      />
      <span className="username-input-error popup__error" />
      <input
        id="userprofession-input"
        required
        name="about"
        type="text"
        minLength={2}
        maxLength={200}
        placeholder="Вид деятельности"
        className="popup__input popup__input_user_profession"
      />
      <span className="userprofession-input-error popup__error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
