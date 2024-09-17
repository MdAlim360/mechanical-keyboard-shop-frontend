import { FaTruck, FaStore, FaStar, FaPhone, FaComment } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

const Advertisement = () => {
  return (
    <Card className="my-4 mx-2  pt-8 bg-gray-100 rounded-3xl">
      <CardContent className="flex flex-col gap-2 md:flex-row md:gap-6 justify-around items-start md:items-center">
        <div className="flex items-center space-x-2">
          <FaTruck className="text-gray-700" size={20} />
          <div>
            <p className="font-semibold text-sm md:text-base">
              Same day delivery
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              for orders before 11:00h!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaStore className="text-gray-700" size={20} />
          <div>
            <p className="font-semibold text-sm md:text-base">
              Free pick up from
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              1000S 8th Avenue, NY!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaStar className="text-gray-700" size={20} />
          <div>
            <p className="font-semibold text-sm md:text-base">Rating 4.8/5!</p>
            <p className="text-xs md:text-sm text-gray-600">
              from verified users
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-700" size={20} />
          <div>
            <p className="font-semibold text-sm md:text-base">
              Call us 09:00-16:00h
            </p>
            <p className="text-xs md:text-sm text-gray-600">1-800-356-8933</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaComment className="text-gray-700" size={20} />
          <div>
            <p className="font-semibold text-sm md:text-base">Message us,</p>
            <p className="text-xs md:text-sm text-gray-600">
              respond same day!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Advertisement;
