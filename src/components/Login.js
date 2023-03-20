import React from 'react';

const Login = ({ onSubmit }) => {
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

    const { password, email } = formValue;
    onSubmit({ password, email });
  };

  return (
    <div className="popup__container-auth">
      <h2 className="popup__title-auth">Вход</h2>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          className="popup__input-auth"
          value={formValue.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="popup__input-auth"
          value={formValue.password}
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
        <button type="submit" className=" popup__btn-auth">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
