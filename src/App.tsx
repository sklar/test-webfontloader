import React from 'react';
import './App.css';
// import logo from './logo.svg';
import { FONTS, usePreloadFonts } from './use-fonts';

function App() {
  usePreloadFonts();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div style={{ margin: '1em auto', maxHeight: 200, minWidth: '100%', overflow: 'auto' }}>
          {FONTS.map((font, index) => <h3 key={index} style={{ fontFamily: font }}>{font}</h3>)}
        </div>
      </header>
    </div>
  );
}

export default App;
