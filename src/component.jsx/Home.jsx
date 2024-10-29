import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Post from "./Post";

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Post />
        </div>
    )
}

export default Home;