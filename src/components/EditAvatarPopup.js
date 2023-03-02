import React from 'react';

import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, isLoader, onLoading } = props;
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    onLoading();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      submitBtnText={isLoader ? 'Сохранить' : 'Сохранить...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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
