
import { Container, AppBar, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import './App.css'
import { CssBaseline } from '@mui/material';
import Topbar from './components/Topbar';
import Content from './components/Content';
import { Outlet } from 'react-router-dom';


const App = () => {

  const [ theme, colorMode ] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={ theme }>
      <CssBaseline />

      <Outlet />
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  )
};


export default App
