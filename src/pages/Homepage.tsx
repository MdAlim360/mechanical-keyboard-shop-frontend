/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Advertisement from "@/components/Advertisement";
import CarouselHeader from "@/components/CarouselHeader";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import KeyboardCustomizer from "@/components/KeyboardCustomizer";
import ProductCard from "@/components/ProductCard";
import TopBrand from "@/components/TopBrand";
import WhyChooseMechanicalKeyboards from "@/components/WhyChooseMechanicalKeyboards";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/productsApi";
import { Link } from "react-router-dom";

function Homepage() {
  const { data, isLoading } = useGetAllProductsQuery({});
  const cartItems = useSelector((state: any) => state.cart.items); // Assuming your cart items are stored in Redux state

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // Required for Chrome to show the warning dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  const handleMoreProductsClick = () => {
    window.scrollTo(0, 0); // Scroll to top before navigation
  };

  return (
    <div className="">
      <div className="mb-4">
        <CarouselHeader />
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto px-0 lg:px-4 rounded-lg">
          <h1 className="text-2xl font-bold pl-0 lg:pl-3 mb-2 md:mb-4 text-[#002842]">
            Our services
          </h1>
          <Advertisement />
        </div>
      </div>
      <div className="p-6 pt-12 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold pb-4 text-[#002842]">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.data?.result?.slice(0, 8).map((product: any) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
        <div className="text-center pt-6">
          {isLoading ? (
            "loading"
          ) : (
            <Link to={"/products"} onClick={handleMoreProductsClick}>
              <Button className="hover:bg-yellow-500 hover:text-black">
                More Products
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="p-6 max-w-7xl mx-auto mt-12 mb-12">
        <h1 className="text-[#002842] text-2xl font-bold pb-4">
          Brands We Love
        </h1>
        <TopBrand />
      </div>
      <div className="p-6 h-[350px]">
        <div className="max-w-7xl mx-auto">
          <CustomerReviews />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 mb-16">
        <WhyChooseMechanicalKeyboards />
      </div>
      <div className="bg-[#F5F5F5] p-6">
        <div className="max-w-7xl mx-auto mt-16 mb-16">
          <KeyboardCustomizer />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
