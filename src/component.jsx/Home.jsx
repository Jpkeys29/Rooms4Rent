import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Post from "./Post";
import Box from '@mui/material/Box';


const Home = () => {
    return (
        <div style={{height:'100vh'}}>
            <Box
                sx={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(/banner.jpg)', 
                    // backgroundImage: 'url(/banner.jpg)',
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '50%',
                    padding: 3,
                    
                }}
            >
                <div>
                    <SearchBar />
                </div>
            </Box>
                <Post />

        </div>
    )
}

export default Home;