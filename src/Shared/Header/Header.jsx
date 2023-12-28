const Header = () => {
    return (
      <div className=" max-w-6xl mx-auto">
       <div className="carousel w-full h-[400px] relative rounded">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/4WRcBsL/banner.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/7bTgVDm/jeune-touriste-adulte-debout-avec-un-t-l-phone-faisant-une-photo-ou-une-vid-o-dans-le-vieux.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/X8tB1cB/belle-touriste-visitant-le-parc-national-prenant-une-photo-selfie-devant-la-cascade-concept.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/THX27X0/des-amies-asiatiques-utilisant-un-t-l-phone-portable-prenant-un-selfie-ensemble-pendant-le.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div className=" absolute -mt-64 lg:ml-80">
      <h2 className=" text-5xl font-bold text-black">Hello Traveler</h2>
      <p className=" text-black font-bold">   There are the some blogs are here.</p>
  </div>
      </div>
    );
  };
  
  export default Header;
  