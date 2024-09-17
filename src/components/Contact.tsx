import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002842] mb-4">Contact Us</h2>
          <p className="text-lg text-[#002842]">
            We'd love to hear from you! Whether you have a question about our
            products, need assistance, or just want to share your experience,
            we're here to help.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full md:w-1/2 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  className="block text-[#002842] text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md border border-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#002842] text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md border border-gray-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#002842] text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded-md border border-gray-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center mt-4"
              >
                <Button className="bg-[#002842] text-white px-6 py-2 rounded-lg hover:bg-[#001e34] transition duration-300">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
