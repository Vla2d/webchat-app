import React, {
  useContext, useState, useMemo, useCallback,
} from 'react';
import { themeContext } from '../../contexts/index.js';

function ThemeProvider({ children }) {
  const defaultTheme = useContext(themeContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? defaultTheme);

  const toggleTheme = useCallback(() => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'dark':
        setTheme('light');
        localStorage.setItem('theme', 'light');
        break;
      default:
        setTheme('light');
        localStorage.setItem('theme', 'light');
        break;
    }
  }, [theme]);

  const cached = useMemo(() => (
    {
      theme,
      toggleTheme,
    }
  ), [theme, toggleTheme]);
  return (
    <themeContext.Provider value={cached}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
