
import { Box, Button, Typography, styled  } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Component =  styled(Box)`
    margin-top: 10px;
    background: #FFFFF;
`;

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
`;
const TypoDeal = styled(Typography)`
    font-size: 12px;
    color: gray;
`;
const ViewAllButton = styled(Button)`
    margin-left: auto;
    height: 35px;
    border-radius: 4px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;

`;



const Slide = ({ products }) =>{
    console.log(products);
    return(
        <Component>
            <Deal>
                <Box>
                    <Typography><b>Best of Electronics</b></Typography>
                    <TypoDeal><b>Best of Electronics</b></TypoDeal>
                </Box>
                <ViewAllButton variant='contained'><b>View All</b></ViewAllButton>

                
            </Deal>
            <hr/>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
        >
                {
                    products.map( product => (
                        <Box textAlign="center" style={{ padding: '25px 15px' }}>
                            <Image src={product.url} alt="product"/>
                            <Text>{product.title.shortTitle}</Text>
                            <Text>{product.discount}</Text>
                            <Text>{product.tagline}</Text>                          
                        </Box>
                    ))
                }
            </Carousel>
        </Component>
        
        
        

    );

}
export default Slide;