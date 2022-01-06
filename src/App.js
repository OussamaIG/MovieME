import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle';
//Components
import Header from './components/Header';

import { useState } from 'react/cjs/react.production.min';


function App() {
  return (
    <div className='App'>
      <Header />
      Start app.
      <GlobalStyle /> 
    </div>
  );
}

export default App;
