import { AppBar, Box, Container, IconButton, Paper, Typography } from "@mui/material"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@emotion/react";



const Topbar = () => {
    
    const theme = useTheme();


    return (
        <Box bgcolor='hsl(209, 23%, 22%)'>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="p" sx={{ color: 'text.primary'}}>
                        Where in the world?
                    </Typography>

                    
                    <IconButton sx={{ ml: 1 }}>
                        <Brightness7Icon htmlColor="#fff"/>
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
};

export default Topbar;