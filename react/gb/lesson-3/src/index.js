import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
//import {Message} from './components';


// const text = 'Привет'
// const text2 = 'Мир'

const theme = createTheme({
  spacing: 2,
  palette: {
    mode: 'dark'
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/> 
    </ThemeProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

//    <Message textH1={text} textH2={text2}/>