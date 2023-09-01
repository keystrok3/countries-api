import { Box, Container } from "@mui/system"
import { useEffect, useState } from "react";
import useFetchCountries from "../hooks/useFetchCountries";
import CountryDetailsSmall from "./CountryDetailsSmall";
import Nav from "./Navbar/Nav"




const Content = () => {
    const fetchCountries = useFetchCountries();


    const [ countries, setCountries ] = useState([]);
    const [ selectedRegion, setSelectedRegion ] = useState("Africa")

    
    const handleSelectRegion = (value) => {
        console.log('value: ', value)
        setSelectedRegion(value)
    };
    
    const filterCountries = () => {
        console.log('region: ', selectedRegion)
        setCountries(prev => (prev, [ ...fetchCountries.filter(country => country.region === selectedRegion)]));
    } 

    useEffect(() => {
        filterCountries();
        // console.log(countries)
    }, [ selectedRegion ]);

    return (
        <Container>
            <Box marginTop='3em'>
                <Nav onSelectRegion={handleSelectRegion} />

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