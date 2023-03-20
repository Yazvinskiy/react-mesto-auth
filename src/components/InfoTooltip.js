import React from 'react';
import logoSuccess from '../images/success.svg';
import logoUnsuccess from '../images/unsuccess.svg';

const InfoTooltip = ({ onClose, isOpen, infoToolStatus }) => {
  return (
    <section
      className={`popup popup_type_info ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button type="button" className="popup__btn-close" onClick={onClose} />
        <img
        className="popup__info-image"
          src={infoToolStatus ? logoSuccess : logoUnsuccess}
          alt={'Лого-результат'}
        />
        <h2 className="popup__info-title">
          {infoToolStatus
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </section>
  );
};

export default InfoTooltip;
