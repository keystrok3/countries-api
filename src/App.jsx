
import { Container, Box, Stack, AppBar } from '@mui/material';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Topbar from './components/Topbar';
import Nav from './components/Navbar/Nav';
import Content from './components/Content';


const darktheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(207, 26%, 17%)',
      contrastText: 'hsl(0, 0%, 100%)'
    },

    secondary: {
      main: 'hsl(209, 23%, 22%)',
      contrastText: 'hsl(0, 0%, 100%)'
    },

    background: {
      default: 'hsl(207, 26%, 17%)'
    },

    text: {
      primary: 'hsl(0, 0%, 98%)'
    }
  },
});

const lighttheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 98%)',
      contrastText: 'hsl(200, 15%, 8%)'
    },

    secondary: {
      main: 'hsl(0, 0%, 98%)',
      contrastText: 'hsl(200, 15%, 8%)'
    },

    background: {
      default: 'hsl(0, 0%, 98%)',
      
    },

    text: { 
      primary: 'hsl(200, 15%, 8%)'
    }
  },

});


const App = () => {

  return (
    <ThemeProvider theme={ darktheme }>
      <CssBaseline />

      <AppBar position='static'>
        <Topbar />
      </AppBar>

      <Container  maxWidth='xl' sx={{ height: '100vh' }}>
        <Content />
      </Container>

    </ThemeProvider>
  )
};


export default App
