import { useEffect, useState } from "react"



const useFetchCountries = () => {
    const [ countries, setCountries ] = useState([]);


    const fetchCountriesData = async () => {
        let data = await fetch('http://localhost:3000/countries');
        let mydata = await data.json();
        
        setCountries(mydata);
    };

    
    useEffect(() => {
        fetchCountriesData()
    }, []);


    return [ ...countries ];
};


export default useFetchCountries;