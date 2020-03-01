import React from 'react';
import { Provider } from 'react-redux';
 
import { store } from './store';

import GlobalStyle from './styles/global';
import { Container } from './styles/global';

import Header from './components/header/index';
import Navigator from './components/navigator/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <Header />
          <Navigator />
        </Container>
        <GlobalStyle />
      </Provider>
    </div>
  );
}

export default App;
