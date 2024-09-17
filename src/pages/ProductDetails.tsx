/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleProductQuery } from "@/redux/features/productsApi";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";

function ProductDetails() {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(productId);

  const dispatch = useDispatch();
  const handleCartButton = (data: any) => {
    console.log(data);
    // dispatch(addProductToCart(data._id));
    dispatch(addToCart(data));
    // console.log(data._id);
  };

  const truncateDescription = (description: any, wordLimit: any) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ")
      : description;
  };

  const ratings = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(data?.data?.rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (data?.data?.rating % 1 !== 0) {
      stars.push(<FaStarHalf key="half" className="text-yellow-500" />);
    }
    return stars;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 pt-2 md:pt-0 lg:pt-16">
      <div className="flex flex-col md:flex-row gap-3 md:gap-12">
        <div className="w-full md:w-1/2 ">
          <img
            src={data?.data?.image}
            alt={data?.data?.name}
            className="w-full h-[365px] lg:h-[365px] md:h-[480px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-bold text-[#002842]">
            {data?.data?.name}
          </h1>
          <h2 className="text-lg md:text-2xl font-light pt-2">
            Brand:{" "}
            <span className="text-gray-600 font-medium">
              {data?.data?.brand}
            </span>
          </h2>
          <h2 className="text-lg md:text-2xl font-light pt-2">
            Available:{" "}
            <span className="text-gray-600 font-medium">
              {data?.data?.available_quantity}
            </span>
          </h2>
          <h2 className="text-lg md:text-2xl font-light pt-2">
            Price:{" "}
            <span className="font-medium text-orange-500">
              {data?.data?.price} tk
            </span>
          </h2>
          <h2 className="text-lg md:text-2xl font-light pt-2 flex items-center">
            {ratings()}
          </h2>
          <p className="mt-4 text-justify">
            {truncateDescription(data?.data?.description, 40)}
          </p>
          <Button
            className="hover:bg-yellow-500 hover:text-black mt-6"
            onClick={() => handleCartButton(data?.data)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
