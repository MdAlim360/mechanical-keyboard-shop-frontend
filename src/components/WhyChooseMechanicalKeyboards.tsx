import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa"; // Import the icon from react-icons

const WhyChooseMechanicalKeyboards = () => {
  return (
    <div className="h-[440px] md:h-[580px] flex mx-6">
      <div className="w-1/2">
        <img
          className="h-[440px] md:h-[580px] rounded-s-lg"
          src="https://i.ibb.co/LpR0H8Z/top-view-white-keyboard-desk.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2 rounded-e-lg bg-[#FFD100]">
        <section className="max-w-5xl mx-auto py-8 md:py-4 lg:py-10 px-2 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-center text-[#002842] mb-8">
            Why Choose Mechanical Keyboards?
          </h2>
          <p className="text-base md:text-lg text-[#002842] mb-6 font-medium md:font-semibold lg:font-bold">
            Mechanical keyboards are favored by typists, gamers, and
            professionals due to their tactile feedback, durability, and
            customizable features.
          </p>
          <ul className="hidden md:block pb-8 md:pb-4 lg-pb-8 pl-5 space-y-4 text-[#002842]">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#002842] mr-2" />{" "}
              {/* Add the icon */}
              Durable and long-lasting switches that can withstand millions of
              keystrokes.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#002842] mr-2" />{" "}
              {/* Add the icon */}
              Improved typing accuracy and speed due to tactile and audible
              feedback.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#002842] mr-2" />{" "}
              {/* Add the icon */}
              Wide range of switch types to suit different preferences (e.g.,
              linear, tactile, clicky).
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#002842] mr-2" />{" "}
              {/* Add the icon */}
              Customizable keycaps, backlighting, and macros.
            </li>
          </ul>
          <Link to={"/products"}>
            <Button className="px-12 md:px-16 hover:text-[#FFD100]">
              Buy Now
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseMechanicalKeyboards;
