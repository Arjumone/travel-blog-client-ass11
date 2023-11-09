import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NewSletter = () => {
    const {user,signIn} = useContext(AuthContext)
    const handleNewSletter = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;

        signIn(email)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error))

    }
  return (
    <div className=" my-4 items-center justify-center text-center">
      <h2 className=" my-2 font-bold text-3xl">New sletter are here</h2>
      <form onSubmit={handleNewSletter} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Drop Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewSletter;
