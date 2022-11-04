import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from 'nav/Header';
import "./index.css";
import {StoreProvider, useStore} from 'store/store';

const App = () => {
  const {count, increment} = useStore()
  return (
    <div className="container">
      <Header/>
      <div>Name: Host</div>
      <div>Count: {count}</div>
      <button onClick={increment}>
        Add to Cart
      </button>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>, 
  document.getElementById("app")
);
