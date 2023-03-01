import React from 'react';

import PopupWithForm from './PopupWithForm';
function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    e.target.reset();
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      submitBtnText="Сохранить"
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
