/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { tokens } from "../theme";



const CountryDetailsSmall = ({ name, population, region, capital, flagUrl }) => {
    const [ flag, setFlag ] = useState({});

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const fetchFlag = async () => {

        fetch(flagUrl)
        .then(response => response.url)
        .then(data => setFlag(data))
    };


    useEffect(() => {
        fetchFlag();
    }, [])

    return ( 
        <Paper 
            elevation={2} 
            
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                margin: '.5em',
                backgroundColor: colors.primary[500],
                width: '22%'
            }}
        >
            <Box>
                <img style={{
                    width: '100%', height: '30vh'
                }} src={flag}/>
            </Box>
            
            <Box display={'flex'} flexDirection='column' marginTop='1em' padding='1em'>
                <Typography variant="h6" marginBottom='1em'><h3>{ name }</h3></Typography>
                <p>Population: { population }</p>
                <p>Region: { region }</p>
                <p>Capital: { capital }</p>
            </Box>
        </Paper>
    )
};


export default CountryDetailsSmall;