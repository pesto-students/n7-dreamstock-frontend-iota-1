import React from "react";
import DreamStock from "./DreamStock";
import "./App.css";
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DreamStock />
      </div>
    </Provider>
  );
}
