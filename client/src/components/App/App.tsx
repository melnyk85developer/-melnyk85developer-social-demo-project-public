import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'components/providers/themeProvider';
import store from 'store/reduxStore';
import AppContainerContent from 'components/AppContent/AppContainerContent';
import './styles.scss';

const App: React.FC = () => {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <AppContainerContent/>
        </ThemeProvider>
      </Provider>
    </BrowserRouter> 
    // </HashRouter>
  );
}
export default App;
