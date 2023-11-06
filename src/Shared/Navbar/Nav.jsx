import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoon } from "react-icons/fa6";


const Nav = () => {
  const {user,logout} = useContext(AuthContext)

  const handleSignOut = ()=>{
          logout()
          .then(result=>{
            console.log(result.user);
          })
          .catch(error=>{
            console.log(error);
          })
  }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addBlog'>Add Blog</NavLink></li>
        <li><NavLink to='/allBlog'>All Blogs</NavLink></li>
        <li><NavLink to='/featured'>Featured</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
      <div className="navbar bg-purple-400 my-2 rounded-lg text-white text-lg font-bold max-w-6xl mx-auto">

          <div className="navbar-start ">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-sky-600 rounded-box w-52 ">
                {navLinks}
              </ul>
            </div>
            <div className=" flex items-center gap-2">
          <img className=" w-10 rounded-full h-10" src="https://i.ibb.co/Ybj1smF/detailed-travel-logo-23-2148616431.jpg" alt="" />
           <p className=" normal-case text-3xl font-bold">World Travel</p>
        </div>
          </div>
      <div className="navbar-center sm:hidden lg:display  lg:flex  ">
        <ul className="menu menu-horizontal px-1 ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">
      {
          user && <div className=" flex">
            {/* <span className=" text-white">{user.displayName
}</span> */}
          <img className=" rounded-full w-10 h-10 gap-3" src={user.photoURL} alt="" />
          </div>
        }
        {
          user ? <button onClick={handleSignOut} className="  bg-purple-700 text-white btn font-bold">logout</button>
          :
        <Link to="/login">
          <button className="  font-bold bg-purple-700 text-white btn">Login</button>
        </Link>
        }
        
      <div><FaMoon className="moon ml-3 text-black"></FaMoon></div>
      </div>
    </div>
    );
};

export default Nav;