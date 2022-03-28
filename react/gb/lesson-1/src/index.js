import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Message} from './components/Message/message';

// const text = 'Привет'
// const text2 = 'Мир'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Message/>
  </React.StrictMode>,
  document.getElementById('root')
);
