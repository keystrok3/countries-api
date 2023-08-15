import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const darktheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)',
      light: 'hsl(200, 15%, 8%)',
      contrastText: 'hsl(0, 0%, 100%)'
    },

    secondary: {
      main: 'hsl(209, 23%, 22%)',
      contrastText: 'hsl(207, 26%, 17%)'
    },
    background: {
      default: 'hsl(207, 26%, 17%)'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
