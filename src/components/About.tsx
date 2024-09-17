import { Button } from "./ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-12 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://i.ibb.co/LpR0H8Z/top-view-white-keyboard-desk.jpg"
              alt="Mechanical Keyboard"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#002842] mb-4">
              About Keyboard Shop
            </h2>
            <p className="text-lg text-[#002842] mb-6">
              At Keyboard Shop, we are passionate about providing the best
              mechanical keyboards and accessories. Our mission is to deliver
              high-quality, customizable keyboards that enhance your typing and
              gaming experience.
            </p>
            <p className="text-lg text-[#002842] mb-6">
              We believe that everyone deserves a keyboard that fits their
              unique style and needs. That's why we offer a wide range of
              products and customizations to ensure you find the perfect match.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-start mt-4"
            >
              <Button className="bg-[#002842] text-white px-6 py-2 rounded-lg hover:bg-[#001e34] transition duration-300">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
