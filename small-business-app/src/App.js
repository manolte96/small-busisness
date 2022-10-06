import React from 'react';
import Nav from './components/Nav'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Businesses } from 'components/Businesses';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Businesses />
      </BrowserRouter>
    </Provider>
  );
}

export default App;