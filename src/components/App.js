import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import ConfirmationPopup from './ConfirmationPopup';
import { api } from '../utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isAddPlacePopupOpen, setISAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCardToDelete, setSelectedCardToDelete] = useState({});
  const [isLoader, setIsLoader] = useState(true);

  const getUserInfo = async () => {
    try {
      const userInfo = await api.getUserData();
      setCurrentUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getCards = async () => {
    try {
      const cards = await api.getInitialCards();
      setCards(cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getCards();
  }, []);

  const handleCardLike = async (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api
        .likeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.log(error));
    } else {
      api
        .dislikeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.log(error));
    }
  };

  const handleAddPlaceSubmit = async (card) => {
    try {
      const newCard = await api.createCard(card);
      setCards([newCard, ...cards]);
      handleCloseAllPopups();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(true);
    }
  };

  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards(cards.filter((c) => c._id !== card._id));
      handleCloseAllPopups();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(true);
    }
  };

  const handleUpdateUser = async (onUpdateUser) => {
    try {
      const updateUser = await api.setUserData(onUpdateUser);
      setCurrentUser(updateUser);
      handleCloseAllPopups();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(true);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      const updateAvatar = await api.editAvatar(data);
      setCurrentUser(updateAvatar);
      handleCloseAllPopups();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(true);
    }
  };

  const handleOpenPopupPlace = () => {
    setISAddPlacePopupOpen(true);
  };

  const handleOpenPopupProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleOpenPopupAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleOpenPopupConformation = (card) => {
    setIsConfirmationPopup(true);
    setSelectedCardToDelete(card);
  };

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  const handleCloseAllPopups = () => {
    setISAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmationPopup(false);
  };

  const handleLoading = () => {
    setIsLoader(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onAddPlace={handleOpenPopupPlace}
            onEditProfile={handleOpenPopupProfile}
            onEditAvatar={handleOpenPopupAvatar}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onConformationPopup={handleOpenPopupConformation}
          />
          <Footer />
        </div>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={handleCloseAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          onLoading={handleLoading}
          isLoader={isLoader}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={handleCloseAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoader={isLoader}
          onLoading={handleLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={handleCloseAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoader={isLoader}
          onLoading={handleLoading}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={handleCloseAllPopups}
          card={selectedCard}
        />
        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onClose={handleCloseAllPopups}
          onCardDelete={handleCardDelete}
          card={selectedCardToDelete}
          isLoader={isLoader}
          onLoading={handleLoading}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
