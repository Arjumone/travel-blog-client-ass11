import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const [registerError,setRegisterError]= useState(' ')
  const [success,setSuccess]=useState(" ")
  const [showPassword,setShowPassword]= useState(false)

  const {createUser} =useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log("register");
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        if(password.length < 6){
          setRegisterError("Please should be al least 6 characters or longer")
          return
        }
        else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
          setRegisterError("Password should be one upper case")
        }

        // reset error and success
        setRegisterError(" ")
        setSuccess(" ")

        // create user
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
          setSuccess("User create successfully")

          // update profile
          updateProfile(result.user,{
            displayName: name,
            photoURL: photo
          })
          .then(result=>{
            console.log("Profile updated",result);
          })
          .catch(error=>{
            console.log(error);
          })
        })
        .catch(error=>{
          console.log(error);
          setRegisterError(error.message)
        })
    }
    return (
        <div>
          <div className="bg-sky-500 max-w-6xl mx-auto">
      </div>
          <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <p className=" text-3xl font-semibold text-center">Please Register</p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text" name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
             <div className=" relative">
             <input
                type={showPassword ? "text":"password"}
                 name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span className=" absolute top-3 right-4" onClick={()=>setShowPassword(!showPassword)}>
                {
                  showPassword ?<FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
              </span>
             </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {
            registerError && <p className=" text-red-600 font-medium">{registerError}</p>
          }
          {
            success && <p className=" text-green-600 font-medium">{success}</p>
          }
          <p>Already have an account?<Link to='/login' className=" text-blue-600 font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;