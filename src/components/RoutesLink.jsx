
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
const RoutesLink = ({path, label}) => {

    return (
        <Link to={path} component={RouterLink}>{ label }</Link>
    )
};

export default RoutesLink;