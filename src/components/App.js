import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';

function App() {
  const [isAddPlacePopupOpen, setISAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleOpenPopupPlace = () => {
    setISAddPlacePopupOpen(true);
  };
  const handleOpenPopupProfile = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleOpenPopupAvatar = () => {
    setIsEditAvatarPopupOpen(true);
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
  };

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onAddPlace={handleOpenPopupPlace}
          onEditProfile={handleOpenPopupProfile}
          onEditAvatar={handleOpenPopupAvatar}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={handleCloseAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseAllPopups}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={handleCloseAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
