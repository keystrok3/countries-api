import { Box, Container } from "@mui/system"
import { useEffect, useState } from "react";
import useFetchCountries from "../hooks/useFetchCountries";
import CountryDetailsSmall from "./CountryDetailsSmall";
import Nav from "./Navbar/Nav"




const Content = () => {
    const fetchCountries = useFetchCountries();


    const [ countries, setCountries ] = useState([]);

    


    useEffect(() => {
        setCountries([ ...fetchCountries.slice(0, 8)]);
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