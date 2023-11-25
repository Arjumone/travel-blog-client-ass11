const FuturePlan = () => {
  return (
    <div>
      <h2 className=" my-3 text-center font-bold text-3xl">
        In Future I want to also blogs....
      </h2>
      <div className=" gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className=" rounded-full h-40 w-40"
              src="https://i.ibb.co/t3091Rv/people-taking-photos-food-23-2149303525.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-center">Food Blogs</h2>
            <p>
              Food blogging is a feature of food journalism interlinking a
              gourmet interest in food, blog writing, and food photography.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className=" rounded-full h-40 w-40"
              src="https://i.ibb.co/xC0vJ2Z/smiling-brunette-drawing-kitchen-23-2147770005.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-center">LifeStyle Blogs</h2>
            <p>
              Lifestyle Blogs typically cover a broad range of topics related
              to various aspects of life, such as fashion, beauty, travel,
              health, home decor, relationships, and personal development..
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className=" rounded-full h-40 w-40"
              src="https://i.ibb.co/SQMShMZ/flat-lay-notebook-cinema-equipment-23-2148470243.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-center">Movie Blogs</h2>
            <p>
            Certainly! Movie blogs are a great way to stay updated on the latest in the film industry, including reviews, news, interviews, and analysis.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className=" rounded-full h-40 w-40"
              src="https://i.ibb.co/CbBmkMF/nutrition-healthy-diet-plan-concept-53876-125014.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-center">Health Blogs</h2>
            <p>
            Health blogs cover a wide range of topics related to physical and mental well-being, fitness, nutrition, medical advice, and lifestyle. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlan;
