
import { Container, AppBar, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import './App.css'
import { CssBaseline } from '@mui/material';
import Topbar from './components/Topbar';
import Content from './components/Content';


const App = () => {

  const [ theme, colorMode ] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={ theme }>
      <CssBaseline />

      <Topbar />
      <Container  maxWidth='xl' sx={{ height: '100vh' }}>
        <Content />
      </Container>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  )
};


export default App
