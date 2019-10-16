import React from 'react';
import './App.css';
import Header from "./header.js";
import Body from "./landingPage.js";
import style from "./style.css";
import Products from "./products.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Products />
    </div>
  );
}

export default App;
