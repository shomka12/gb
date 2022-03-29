import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
//import {Message} from './components';


// const text = 'Привет'
// const text2 = 'Мир'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App/>

  </React.StrictMode>,
  document.getElementById('root')
);

//    <Message textH1={text} textH2={text2}/>