import React, { useCallback, useContext, useState } from 'react';
const themes = {
  light: {
    forceColor: '#FFF',
    background: 'green',
  },
  dark: {
    forceColor: '#fff',
    background: '#333',
  },
};

const ThemeContext = React.createContext(themes.light);

function Toolbar() {
  return (
    <div>
      <ThemeButton></ThemeButton>
    </div>
  );
}

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.forceColor,
      }}
    >
      theme button
    </button>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [theme, setTheme] = useState('light');
  const toggle = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <button onClick={toggle}>toggle</button>
      <br />
      <Toolbar />
    </ThemeContext.Provider>
  );
}
