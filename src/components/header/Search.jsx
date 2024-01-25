import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, styled } from '@mui/material';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
    margin
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`;

const Search = () => {
    return(
        <SearchContainer>
            <InputSearchBase
                placeholder='search for product, brand and more'
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    );

}
export default Search;