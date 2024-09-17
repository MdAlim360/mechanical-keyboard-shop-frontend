/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store"; // Assuming you have a RootState type defined

interface CartItem {
  _id: string;
  subPrice: number;
  quantity: number;
  productName: string;
  price: number;
  availableQuantity: number;
}

function Cart() {
  const items = useSelector(
    (state: RootState) => state.cart.items
  ) as unknown as CartItem[];
  const [showCheckout, setShowCheckout] = useState(false);
  console.log(showCheckout);
  // Ensure totalPrice calculation is correct and its type is number
  let totalPrice = items.reduce(
    (total: number, item: CartItem) => total + item.subPrice,
    0
  );
  totalPrice = parseFloat(totalPrice.toFixed(2)); // Keep it as number instead of string

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (items.length > 0) {
        const message =
          "You have unsaved changes in your cart. Are you sure you want to leave?";
        event.preventDefault();
        event.returnValue = message; // For most browsers
        return message; // For some browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items]);

  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 pt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-2">
          <thead>
            <tr className="bg-gray-100 border-b-2">
              <th className="text-left text-xs md:text-lg py-2 pr-1 md:pr-24 lg:pr-80 pl-2">
                Product
              </th>
              <th className="text-left text-xs md:text-lg py-2 pr-0 md:pr-32 pl-2">
                Price
              </th>
              <th className="text-left text-xs md:text-lg py-2 pr-1 md:pr-32 pl-2">
                Available Quantity
              </th>
              <th className="hidden lg:block text-xs md:text-lg text-left py-2 pr-0 md:pr-32 pl-2">
                Subtotal
              </th>
              <th className="text-xs md:text-lg text-left py-2 pr-0 md:pr-0 pl-2">
                Quantity
              </th>
              <th className="text-left py-2"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between border-t-2 mb-8">
        <div className="font-medium text-gray-500 pt-2 mt-4 ">
          Total Price: <span className="text-black">{totalPrice} tk</span>
        </div>
        {totalPrice === 0 ? (
          <Link to={""}>
            <Button
              className="mt-4 px-6 py-3 text-white shadow-md transition duration-300"
              disabled
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Link>
        ) : (
          <Link to={"/checkout"}>
            <Button
              className="mt-4 px-6 py-3 text-white shadow-md transition duration-300"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
