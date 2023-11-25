import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import BlogAbout from "../BlogAbout/BlogAbout";
import FuturePlan from "../FuturePPlan/FuturePlan";
import NewSletter from "../NewSletter/NewSletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";


const Home = () => {
   
    
    return (
        <div>
           <Header></Header>
            <RecentBlogs></RecentBlogs>
            <NewSletter></NewSletter>
            <FuturePlan></FuturePlan>
            <BlogAbout></BlogAbout>
           <Footer></Footer>
        </div>
    );
};

export default Home;