/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchCountries from "../hooks/useFetchCountries"


const Country = ({ country }) => {

    const [ countryData, setCountryData ] = useState({});

    const fetchCountries = useFetchCountries();

    const getCountry = () => {

        let data = fetchCountries.find((countrydata) => {
            return countrydata.name.toLowerCase() == country.toLowerCase();
        });

        setCountryData(prev => (prev, { ...data }));
    };


    useEffect(() => {
        getCountry();
    }, [ ]);


    return (
        <Box>
            <Box>
            </Box>
            <Box>
                <Typography>
                { countryData.name }
                </Typography>
            </Box>
        </Box>
    )
};

export default Country;