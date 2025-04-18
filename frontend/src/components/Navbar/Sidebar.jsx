import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "60%" : "100%" }}
      exit={{ x: "100%", transition: { type: "tween", duration: 0.5, ease: "easeInOut" } }}
      transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-[55%] bg-gray-900 text-white shadow-lg p-5 z-50 border-l-2 border-white-500"
    >
      {/* Close Button */}
      <button className="relative left-64 top-6 text-3xl text-white" onClick={() => setIsOpen(false)}>
        <IoClose />
      </button>

      <div className="flex gap-10">
        {/* Social Links */}
        <div className="flex flex-col items-start justify-start mt-32 ml-5">
          <span className="relative top-5 text-2xl font-extralight">Social</span>
          <div className="relative top-5 right-1 w-16 h-0.5 bg-blue-500 rounded-b-lg"></div>
          <ul className="mt-10 space-y-4 text-xl">
            <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
              <a href="https://www.linkedin.com/in/anupsimha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
              <a href="https://github.com/Anupsimha" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
              <a href="https://www.facebook.com/profile.php?id=61561064066138&sk=about" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
              <a href="https://x.com/AnupSimha4288" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
              Discord
            </li>
          </ul>
        </div>

        {/* Menu Links */}
        <div className="relative left-6 flex flex-col items-start justify-start mt-32 ml-5">
          <span className="relative top-5 text-2xl font-extralight">Menu</span>
          <div className="relative top-5 right-1 w-16 h-0.5 bg-red-500 rounded-b-lg"></div>
          <ul className="relative right-5 mt-10 space-y-4 text-xl">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-orange-500 rounded-full inline-block"></span>
              <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></span>
              <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
                <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
              </li>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block"></span>
              <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-900 rounded-full inline-block"></span>
              <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
                <Link to="/showcase" onClick={() => setIsOpen(false)}>Showcase</Link>
              </li>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-red-500 rounded-full inline-block"></span>
              <li className="cursor-pointer font-semibold text-gray-400 hover:text-white">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </div>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="absolute bottom-20 left-5 flex flex-col items-start justify-start gap-2 mt-32 ml-5 font-light text-lg">
          <p className="text-white">GET IN TOUCH</p>
          <p className="text-white font-semibold text-xl cursor-pointer">anupsimha2@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
