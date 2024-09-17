import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#002842] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-bold mb-4">KeyMaster Keyboard Shop</h2>
            <p className="text-sm">
              Your one-stop shop for all things mechanical keyboards. Discover
              the best keyboards, keycaps, and accessories.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/products" className="hover:text-[#FFD100]">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFD100]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFD100]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FFD100]">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100]"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100]"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-bold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and promotions.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-black mb-2"
              />
              <motion.button
                type="submit"
                className="w-full p-2 bg-[#FFD100] text-black rounded-md hover:bg-[#FFC000] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 KeyMaster Keyboard Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
