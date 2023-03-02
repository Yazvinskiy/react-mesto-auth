import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser, isLoader, onLoading } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  React.useEffect(() => {
    setName(currentUser.name ?? '');
    setDescription(currentUser.about ?? '');
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLoading();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      submitBtnText={isLoader ? 'Сохранить' : 'Сохранить...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={handleChangeName}
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
        value={description}
        onChange={handleChangeDescription}
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
