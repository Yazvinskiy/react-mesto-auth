import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onSubmit }) => {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    onSubmit({ email, password });
  };

  return (
    <div className="popup__container-auth">
      <h2 className="popup__title-auth">Регистрация</h2>
      <form onSubmit={handleSubmit} className="popup__form">
        <input
          className="popup__input-auth"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="popup__input-auth"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <button type="submit" className=" popup__btn-auth">
          Зарегистрироваться
        </button>
      </form>
      <div className="signup-container">
        <p className="signup-container__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="signup-container__link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
