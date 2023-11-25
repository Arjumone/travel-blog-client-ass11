import { useState } from "react";
import Swal from "sweetalert2";

const NewSletter = () => {
  const [email, setEmail] = useState("");

  const handleNewSletter = (e) => {
    e.preventDefault();

    if (email) {
      Swal.fire("Thank you for subscribing to our newsletter");
      return;
    }
    setEmail("");
  };

  return (
    <div className="my-4 items-center justify-center text-center">
      <h2 className="my-2 font-bold text-3xl">Newsletter is here</h2>
      <form onSubmit={handleNewSletter} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Drop Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSletter;
