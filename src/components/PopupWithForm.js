import React from 'react';
function PopupWithForm(props) {
  const { title, name, children, submitBtnText, isOpen, onClose, onSubmit} = props;
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button type="button" className="popup__btn-close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__btn-save">
            {submitBtnText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
