const BlogAbout = () => {
  return (
    <div className=" my-4">

      <div className="card lg:card-side shadow-xl flex bg-cyan-100">
        <figure className="flex-1">
          <img
            src="https://i.ibb.co/Sd3Z7Ls/fork-spoon-with-egg-logo-design-vector-15473-14619.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body  flex-1">
          <h2 className="card-title font-bold text-xl">Whatever eating,Health Is First Priority</h2>
          <p className=" "> Fit Foodie Finds combines healthy recipes with fitness tips and lifestyle content, creating a holistic approach to wellness. If you seek a mix of nutrition advice, meal planning resources, and tasty dishes, EatingWell has you covered. Vegetarian enthusiasts will appreciate Cookie and Kate, known for its vibrant, produce-centric recipes. For those watching calories without compromising flavor, Skinnytaste offers a treasure trove of healthy yet delicious meals. Dive into the world of plant-based Scandinavian recipes with Green Kitchen Stories, or explore the seasonal, vegetarian wonders of Love and Lemons. Lastly, Naturally Ella focuses on whole foods-based recipes, emphasizing seasonal ingredients for a wholesome culinary experience. These blogs cater to various tastes and dietary needs, providing a roadmap for your healthy and delicious food journey. Always consult with healthcare professionals for personalized nutrition advice tailored to your unique needs.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-cyan-200">Contact Us For More Information</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAbout;
