import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { authContext, themeContext } from '../../contexts/index.js';
import { chatPagePath } from '../../routes.js';
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
  const { t } = useTranslation();
  const auth = useContext(authContext);
  const theme = useContext(themeContext);

  const handleLogout = () => {
    auth.logOut();
  };

  return (
    <nav className={`shadow-sm navbar navbar-expand-lg navbar-light bg-${theme.theme}`}>
      <div className="container">
        <Link to={chatPagePath()} className="navbar-brand">
          Chat
        </Link>
        <div>
          <ThemeToggle />
        </div>
        {auth.loggedIn ? <button type="button" className="btn btn-primary" onClick={handleLogout}>{t('buttons.logOut')}</button> : null}
      </div>
    </nav>
  );
}

export default Header;
