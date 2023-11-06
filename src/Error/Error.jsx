import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex items-center  text-center mt-10">
           <div className="justify-center items-center text-center">
           <img src="https://i.ibb.co/QQMDhgz/error-404-concept-landing-page-52683-9671.jpg" alt="" />
           </div>
            <div>
            <Link to='/' className="px-4 py-2  rounded-lg  bg-red-500 text-white">Go back Home</Link>
            </div>
        </div>
    );
};

export default Error;