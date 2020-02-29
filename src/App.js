import React from 'react';
import { Provider } from 'react-redux';
 
import { store } from './store';

import GlobalStyle from './styles/global';

import { Container } from './styles/global';

import Search from './components/search';
import List from './components/List/index';
import Header from './components/header/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <Header />
          <Search/>
          <List />
        </Container>
        <GlobalStyle />
      </Provider>
    </div>
  );
}

export default App;
