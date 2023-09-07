import { Container } from "@mui/system";
import Content from "../components/Content";
import Topbar from "../components/Topbar";



const Home = () => {

    return (
        <>
            <Topbar />
            <Container maxWidth='xl' sx={{ height: '100vh' }}>
                <Content />
            </Container>
        </>
    )
};


export default Home;