import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    sortDescription: "",
    longDescription: "",
    category: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBlogs = (e) => {
    e.preventDefault();

    const blogDataWithUser = {
      ...formData,
      userEmail:user.email,
      userPhoto:user.photoURL,
    };

   
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogDataWithUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added the Blog",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error( error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto bg-cyan-50 rounded p-4">
      <h2 className="font-semibold text-3xl my-3">Added All Blog Are Here</h2>
      <form onSubmit={handleAddBlogs}>
      <div className=" md:flex mb-6 gap-3">
           <div className="form-control md:w-1/2">
             <label className="label">
               <span className="label-text">Title</span>
             </label>
             <label className="input-group">
               <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={formData.title}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={formData.image}
              />
            </label>
          </div>
        </div>

        <div className=" md:flex mb-6 gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sort Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="sortDescription"
                placeholder="Sort Description"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={formData.sortDescription}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="longDescription"
                placeholder="Long Description"
                className="input input-bordered w-full"
                onChange={handleChange}
                value={formData.longDescription}
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <select name="category" className="select select-bordered w-full max-w-xs"  onChange={handleChange}
            value={formData.category}>
            <option onChange={handleChange} value={formData.category} name="category" disabled selected>
             Category
            </option>
            <option name="category">Bangladesh Travel Blog</option>
            <option name="category">Abroad Travel Blog</option>
          </select>
        </div>
        <input type="submit" value="Submit" className=" mt-2 btn btn-block bg-black text-white" />
      </form>
    </div>
  );
};

export default AddBlog;
