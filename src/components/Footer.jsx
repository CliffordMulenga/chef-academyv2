import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP, FaXTwitter } from 'react-icons/fa6';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import logo from '/logo.png';

const Footer = () => {
  const foodImages = [food1, food2, food3, food4, food5, food6];

  return (
    <footer className="bg-white pt-24 ">

      {/* CTA Banner */}
<section className="relative bg-gray-100 py-10 md:py-20 overflow-hidden">
  {/* Infinite Image Scroll */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
    <div className="animate-scroll-horizontal flex gap-6 w-max">
      {Array(3).fill(foodImages).flat().map((src, i) => (
        <img
          key={i}
          src={src}
          alt="food"
          className="h-60 w-auto rounded-xl object-cover"
        />
      ))}
    </div>
  </div>

  {/* CTA Text */}
  <div className="relative z-10 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      Ready to Start Cooking Like a Pro?
    </h2>
    <a
      href="#apply"
      className="inline-block mt-2 bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition"
    >
      Apply Now
    </a>
  </div>
</section>


      {/* Footer Links */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="logo" className="w-14 mb-4" />
            <p className="text-sm text-gray-300">
              Chef Academy of London provides world-class culinary training with real kitchen experience and global certification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#students" className="hover:text-white">Students</a></li>
              <li><a href="#apply" className="hover:text-white">Apply Now</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white"><FaPinterestP /></a>
              <a href="#" className="hover:text-white"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Chef Academy of London. All rights reserved.
        </div>
      </div>

      {/* Scroll Animation Style */}
      <style>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 60s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
