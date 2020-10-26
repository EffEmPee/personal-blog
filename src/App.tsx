import React from 'react';
import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import Routes from './routes';
import usePersistentState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Switcher from './components/Switcher';


const App: React.FC = () => {
  const [theme, setTheme] = usePersistentState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Switcher toggleTheme={toggleTheme} />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
