/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";

function CartItem({ item }: { item: any }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart(item._id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item._id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item._id));
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition duration-300">
      <td className="flex flex-col md:flex-row gap-4 items-center py-4">
        <img
          className="w-20 hidden md:block"
          src={item.image}
          alt={item.name}
        />
        <span className="truncate text-xs md:text-lg">{item.name}</span>
      </td>
      <td className="py-4 text-xs md:text-lg">{item.price} tk</td>
      <td className="py-4 text-xs md:text-lg">{item.available_quantity}</td>
      <td className="py-4 hidden lg:table-cell text-sm md:text-lg">
        {item.subPrice} tk
      </td>
      <td className="flex items-center py-4">
        <button
          onClick={handleDecrease}
          className="p-2 border rounded-md hover:bg-gray-200 transition duration-300"
        >
          <img
            className="w-5 md:w-7"
            src="https://i.ibb.co/Kq6ZXzT/arrow.png"
            alt="Decrease Quantity"
          />
        </button>
        <div className="text-xs md:text-lg mx-2">{item.quantity}</div>
        <button
          onClick={handleIncrease}
          className="p-2 border rounded-md hover:bg-gray-200 transition duration-300"
        >
          <img
            className="w-5 md:w-7"
            src="https://i.ibb.co/VSBXHMt/arrow2.png"
            alt="Increase Quantity"
          />
        </button>
      </td>
      <td className="py-4 text-xs md:text-lg">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition duration-300"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
