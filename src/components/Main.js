import { useEffect, useState } from 'react';
import Card from './Card';
import { api } from '../utils/api';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  const getUserInfo = async () => {
    try {
      const userInfo = await api.getUserData();
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    } catch (err) {
      console.log(err);
    }
  };

  const getCards = async () => {
    try {
      const cards = await api.getInitialCards();
      setCards(cards);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
    getCards();
  }, []);

  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__hover-effect">
            <img className="profile__avatar" src={userAvatar} alt="аватарка" />
            <div className="profile__overlay" />
            <button
              type="button"
              className="profile__edit-avatar-button"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__content">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
