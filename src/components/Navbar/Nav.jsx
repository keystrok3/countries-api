/* eslint-disable react/prop-types */
import { Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { useState } from "react";


const regions = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];


const Nav = ({ onSelectRegion }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const [ regionValue, setRegionValue ] = useState(regions[0])


    const handleChange = (e) => {
        setRegionValue(e.target.value);
        onSelectRegion(e.target.value);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '.5em 0'}}>
            <Box bgcolor={colors.primary[500]} borderRadius='3px'>
                <IconButton type="button">
                    <SearchIcon />
                </IconButton>
                <InputBase placeholder="Search for country"/>
            </Box>

            <Box width="30%">
                <FormControl fullWidth>
                    <InputLabel id="regions">Filter by region</InputLabel>
                    <Select 
                        id="region-select"
                        labelId="regions" 
                        label="Filter by region"
                        value={regionValue}
                        sx={{ color: colors.text }}
                        onChange={handleChange}
                    >
                        {
                            regions.map(region => {
                                return (
                                    <MenuItem 
                                        key={region}
                                        value={region}
                                    >{region}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
};

export default Nav;