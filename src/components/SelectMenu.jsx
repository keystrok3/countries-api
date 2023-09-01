import { FormControl, InputLabel, ListItem, Menu, MenuItem, Select } from "@mui/material";



const SelectMenu = () => {


    const regions = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ];
    return (
        <>
            <Menu>
                {
                    regions.map((region, idx) => {
                        return <MenuItem key={`${idx}`}>{ region }</MenuItem>
                    })
                }
            </Menu>
        </>
    )
};


export default SelectMenu;