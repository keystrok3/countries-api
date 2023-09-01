import { Paper } from "@mui/material";
import { Box, Container, Stack } from "@mui/system"
import { useEffect, useState } from "react";
import CountryDetailsSmall from "./CountryDetailsSmall";
import Nav from "./Navbar/Nav"




const Content = () => {

    const [ countries, setCountries ] = useState([]);


    const fetchCountriesData = async () => {
        let data = await fetch('http://localhost:3000/countries');
        let mydata = await data.json();
        
        setCountries([ ...mydata.slice(0, 12) ]);
    };


    useEffect(() => {
        fetchCountriesData();
    }, []);

    return (
        <Container>
            <Box marginTop='3em'>
                <Nav />

                <Box 
                    display={'flex'} 
                    flexDirection={'row'} 
                    flexWrap="wrap"
                    justifyContent='center'
                >
                    {
                        countries.map((country, idx) => {
                            return <CountryDetailsSmall 
                                        key={idx} 
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                        flagUrl={country.flags.svg}
                                    />
                        })
                    }
                </Box>
          </Box>
        </Container>
    )
};

export default Content;