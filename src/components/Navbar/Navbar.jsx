import { Stack } from "@mui/material";
import Topbar from "../Topbar";
import Nav from "./Nav";




const Navbar = () => {
    return (
        <Stack direction='column'>
            <Topbar />
            <Nav  />
        </Stack>
    )
};

export default Navbar;