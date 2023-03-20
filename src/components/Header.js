import { Route, Routes, Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header({ userEmail, onSignOut, loggedIn }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого-место" />
      <Routes>
        <Route
          path="sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              {loggedIn ? '' : 'Регистрация'}
            </Link>
          }
        ></Route>
      </Routes>
      {loggedIn && (
        <div className={'header__link__container'}>
          <p className="header__email">{userEmail}</p>
          <Link to="/sign-in" className="header__link" onClick={onSignOut}>
            Выйти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
