import Swal from "sweetalert2";

const AddBlog = () => {
  const handleAddBlogs = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const sortDescription = form.sortDescription.value;
    const longDescription = form.longDescription.value;
    const date = new Date();
    const newBlogs = {
      image,
      title,
      sortDescription,
      longDescription,
      date
    };
    console.log(newBlogs);

    //  send data to the server
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlogs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added the Blog",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" max-w-6xl mx-auto bg-red-50 rounded p-4">
      <h2 className=" font-semibold text-3xl my-3">Added All Blog Are Here</h2>
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
              />
            </label>
          </div>
        </div>

        <div className="  mb-6 gap-3 items-center">
          <div className="form-control w-full mt-3">
            <input
              type="submit"
              value="Submit"
              className=" btn btn-block bg-black text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
