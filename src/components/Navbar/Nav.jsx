import { Box, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const Nav = () => {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '.5em 0'}}>
            <FormControl>
                <Input 
                    sx={{
                        backgroundColor: 'hsl(209, 23%, 22%)',
                        padding: '.5em',
                    }}
                    placeholder="Search for a country"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon htmlColor="#fff"/>
                    </InputAdornment>
                }/>
            </FormControl>

            
            <FormControl>
                <InputLabel sx={{ color: '#fff'}} id='region-select'>Filter by region</InputLabel>
                <Select 
                    labelId='region-select' 
                    label='Filter by region'
                >
                    <MenuItem defaultValue='Africa' >Africa</MenuItem>
                    <MenuItem defaultValue='America' >America</MenuItem>
                    <MenuItem defaultValue='Asia' >Asia</MenuItem>
                    <MenuItem defaultValue='Europe' >Europe</MenuItem>
                    <MenuItem defaultValue='Oceania' >Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
};

export default Nav;