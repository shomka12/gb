import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Hello World!'

const elem = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);


