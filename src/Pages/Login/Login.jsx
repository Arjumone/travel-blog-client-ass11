import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  // const [currentUser,setCurrentUser]=useState(null)
  const [registerError,setRegisterError]= useState(' ')
  const [success,setSuccess]=useState(" ")

  const {signIn,googleSignIn}= useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        console.log("login");
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        // reset error and success
        setRegisterError(" ")
        setSuccess(" ")

       signIn(email,password)
       .then(result=>{
        console.log(result.user);
        setSuccess("User logged successfully")

        //  navigate after login
        navigate(location?.state? location.state : "/")
      })
      .catch(error=>{
        console.log(error);
        setRegisterError(error.message)
      })

    }
    const handleWithGoogle=()=>{
      googleSignIn()
      .then(result=>{
        // const loggedUser = result.user
        // setCurrentUser(loggedUser)
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
  return (
    <div>
      <div className="bg-sky-500 max-w-6xl mx-auto">
      </div>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <p className=" text-3xl font-semibold mt-2 text-center">Please Login</p>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className=" justify-center text-center"><button onClick={handleWithGoogle} className=" btn btn-success text-center">Login with Google</button></div>
          <div className=" text-center">
          {
            registerError && <p className=" text-red-600 font-medium">{registerError}</p>
          }
          </div>
          <div className=" text-center">
          {
            success && <p className=" text-green-600 font-medium">{success}</p>
          }
          </div>
          <p className=" py-2 text-center">Do not have an account?<Link to='/register' className="text-center  text-blue-600 font-semibold">Register</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
