const BlogD = ({ blog }) => {
    console.log(blog);
//   const {bg}= blog
  const { title, sortDescription, image, longDescription } = blog;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{sortDescription}</p>
          <p>{longDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogD;
