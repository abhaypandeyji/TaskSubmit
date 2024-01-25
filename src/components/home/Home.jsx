
//component

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import { products } from "../../Constants/products";

import { Box, styled } from "@mui/material";


const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {
    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
            
            <Slide products={ products }/>
            <Slide products={ products }/>
            
        </Component>
        </>
    );
}
export default Home;