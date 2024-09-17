import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { updateProductQuantity } from "@/redux/features/cartSlice";
import { useUpdateProductMutation } from "@/redux/features/productsApi";
import { ChangeEvent, FormEvent, useState } from "react";

// Define the type for the form data
interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

// Define the type for cart items
interface CartItem {
  _id: string;
  available_quantity: number;
  quantity: number;
}

function CheckoutForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: CartItem[] = useSelector((state: any) => state.cart.items);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Reduce the available quantity of the products
    items.forEach((item) => {
      const available_quantity = item.available_quantity - item.quantity;
      updateProduct({ id: item._id, updateData: { available_quantity } });
      dispatch(
        updateProductQuantity({ id: item._id, quantity: item.quantity })
      );
    });
    // alert("Order placed successfully!");
    navigate("/order-confirm");
  };

  return (
    <form className="mt-4 max-w-7xl mx-auto px-6" onSubmit={handleSubmit}>
      <h1 className="text-xl font-medium py-4">Delivery Address</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
      </div>
      <div className="flex pt-6">
        <div>
          <Checkbox id="cash" name="cash" />
          <label
            htmlFor="cash"
            className="text-sm pl-2 font-medium leading-none"
          >
            Cash on delivery
          </label>
        </div>
        <div className="pl-4">
          <Checkbox id="stripe" name="online" />
          <label
            htmlFor="stripe"
            className="text-sm pl-2 font-medium leading-none"
          >
            Stripe
          </label>
        </div>
      </div>
      <Button type="submit" className="mt-4 px-4 py-2 rounded">
        Place Order
      </Button>
    </form>
  );
}

export default CheckoutForm;
