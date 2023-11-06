import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white mt-3 rounded ">
        <div className=' mx-auto flex lg:gap-40 flex-col lg:flex-row'>
        <aside>
          <div className=' flex gap-4 items-center mb-4 justify-center lg:mt-7'>
          <img className=' rounded-full h-10 w-10' src="https://i.ibb.co/Ybj1smF/detailed-travel-logo-23-2148616431.jpg" alt="" />
          <p className=' text-xl'>World Travel</p>
          </div>
          <p className=''>
             
          </p>
        </aside>
        <nav>
          <header className="footer-title text-xl">Contact</header>
          <a className="link link-hover block">Email:arjutuhin777@gmail.com</a>
          <a className="link link-hover block">Cell:01814280478</a>
          <a className="link link-hover block">Address:Chittagong</a>
        </nav>
        <nav>
          <header className="footer-title text-xl  ">Social Contact</header>
          <a href="https://facebook.com" className="text-white mr-4 flex items-center ">
              <FaFacebook className=' mr-3 '></FaFacebook>Facebook
            </a>
            <a href="https://instagram.com" className="text-white mr-4 flex">
              <FaInstagram className=' mr-3'></FaInstagram>Instagram
            </a>
            <a href="https://twitter.com" className="text-white mr-4 flex">
              <FaTwitter className=' mr-3'></FaTwitter>Twitter
            </a>
            <a href="https://youtube.com" className="text-white flex">
              <FaYoutube className=' mr-3'></FaYoutube>Youtube
            </a>
        </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
