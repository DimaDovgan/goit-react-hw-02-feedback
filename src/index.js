import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ButtonList } from "./components/buttoon-list.jsx";
import element from "./component.json"
import {Feedback} from "./components/feedbeckDoc"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Feedback state={element}></Feedback>
  </React.StrictMode>
);
