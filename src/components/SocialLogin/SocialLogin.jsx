import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      fetch("http://localhost:3000/user", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className=" p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className=" mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
