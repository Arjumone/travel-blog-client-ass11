const Header = () => {
    return (
      <div className=" max-w-6xl mx-auto">
       <div className="carousel w-full h-[400px] relative">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/xYQ0nXB/top-view-table-full-delicious-food-composition.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/WfpNtnp/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/Ctcqn6H/delicious-fried-chicken-plate.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/HYR891w/chicken-skewers-with-slices-sweet-peppers-dill.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div className=" absolute -mt-64 lg:ml-80">
      <h2 className=" text-5xl font-bold text-white">Hello Foodies</h2>
      <p className=" text-white">Welcome to world of foodies with all over world varieties of foods and drinks.</p>
  </div>
      </div>
    );
  };
  
  export default Header;
  