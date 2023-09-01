import { AppBar, Box, Container, IconButton, Paper, Typography } from "@mui/material"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";



const Topbar = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);


    return (
        <Box 
            bgcolor={theme.palette.primary.light} 
            boxShadow={`1px 1px 5px ${colors.primary[700]}`}
            padding='1em'
        >
            <Container>
                <Box
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                    }}>
                    <Typography variant="h4">
                        Where in the world?
                    </Typography>

                    
                    <Box display='flex'>
                        <IconButton onClick={ colorMode.toggleMode }>
                            {
                                theme.palette.mode === 'dark' ? (
                                    <LightModeOutlined />
                                ) : (
                                    <DarkModeOutlined />
                                )
                                
                            }
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default Topbar;