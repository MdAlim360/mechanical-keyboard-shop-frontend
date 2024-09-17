import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "@/redux/store"; // Adjust the path as necessary

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity?: number;
  subPrice?: number;
}

function OrderConfirmation() {
  // Specify the type of the items using `CartItem[]`
  const items: CartItem[] = useSelector((state: RootState) => state.cart.items);

  // Calculate the total price
  const totalPrice = items
    .reduce((total, item) => total + (item.subPrice ?? 0), 0)
    .toFixed(2);

  return (
    <div className="max-w-3xl mx-auto px-1 sm:px-6 lg:px-8 pt-8 text-center">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center">
          <img
            className="w-16 h-16"
            src="https://i.ibb.co/KmrSQgs/checked.png"
            alt="Order Success"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-green-600">
          Order Confirmed!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for your order! Your order has been placed successfully.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Order Summary
          </h2>
          <div className="mt-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b py-2"
              >
                <div className="text-left">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x {item.price} tk
                  </p>
                </div>
                <div className="text-right text-gray-800">
                  {item.subPrice ?? 0} tk
                </div>
              </div>
            ))}
            <div className="flex justify-between border-t py-2 font-semibold text-lg text-gray-800 mt-4">
              <p>Total:</p>
              <p>{totalPrice} tk</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
