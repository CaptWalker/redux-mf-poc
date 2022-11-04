import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from './Header';
import {StoreProvider} from 'store/store';

const App = () => (
  <StoreProvider>
    <div className="container">
      <Header />
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
