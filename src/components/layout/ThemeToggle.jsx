import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { themeContext } from '../../contexts/index.js';

function ThemeToggle() {
  const theme = useContext(themeContext);

  return (
    <ReactSwitch onChange={theme.toggleTheme} checked={theme.theme === 'dark'} />
  );
}

export default ThemeToggle;
