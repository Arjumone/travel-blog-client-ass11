import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import "./Login.css"; 

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User login Successful",
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Invalid email or password. Please try again.",
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold animated-text">Login now!</h1>
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 animated-card">
          <form onSubmit={handleSignIn} className="card-body animated-form">
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered animated-input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label"></label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered animated-input"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center my-2">
            <small>
              New here?
              <Link to="/register" className="text-green-500 font-bold">
                Create an Account
              </Link>
            </small>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
