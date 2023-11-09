

// import { useLoaderData } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import NewSletter from "../NewSletter/NewSletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";


const Home = () => {
    // const allBlogs = useLoaderData();
    
    return (
        <div>
           <Header></Header>
            <RecentBlogs></RecentBlogs>
            <NewSletter></NewSletter>
           <Footer></Footer>
        </div>
    );
};

export default Home;