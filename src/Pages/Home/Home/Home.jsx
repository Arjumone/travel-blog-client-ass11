import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import BlogAbout from "../BlogAbout/BlogAbout";
import FuturePlan from "../FuturePPlan/FuturePlan";
import NewSletter from "../NewSletter/NewSletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

import { motion } from "framer-motion"

const Home = () => {
   
    
    return (
        <motion.div className=" bg-cyan-50 px-2" animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}>
           <Header></Header>
            <RecentBlogs></RecentBlogs>
            <NewSletter></NewSletter>
            <FuturePlan></FuturePlan>
            <BlogAbout></BlogAbout>
           <Footer></Footer>
        </motion.div>
    );
};

export default Home;