/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { addToCart } from "@/redux/features/cartSlice";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

// Define the type for the product
interface Product {
  _id: string;
  name: string;
  brand: string;
  image: string;
  rating: number;
  available_quantity: number;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ratings = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(product.rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (product.rating % 1 !== 0) {
      stars.push(<FaStarHalf key="half" className="text-yellow-500" />);
    }
    return stars;
  };

  const dispatch = useDispatch();
  const handleCartButton = (data: string) => {
    console.log(data);
    dispatch(addToCart(product as any));
    if (data === "") {
      toast.error("This product is not available!", {
        position: "top-center",
      });
    } else {
      toast.success("Product added to the cart successfully!", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <Toaster />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full flex flex-col justify-between hover:shadow-xl"
      >
        <Card>
          <CardHeader>
            {/* <CardTitle className="text-center">{product.name}</CardTitle> */}
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-center">
              <motion.div
                className="w-full h-40 mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <p className="text-lg font-bold pb-2">{product.brand}</p>
            </div>
            <div className="text-slate-600 font-bold">
              <p>{product.name}</p>
              <p className="text-lg font-bold">
                Quantity: {product.available_quantity}
              </p>
              <p className="text-lg font-bold">{product.price} tk</p>
              <div className="flex">{ratings()}</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to={`/details/${product._id}`}>
              <Button variant="outline">Details</Button>
            </Link>
            {product.available_quantity === 0 ? (
              <Button
                className="hover:bg-yellow-500 hover:text-black"
                onClick={() => handleCartButton("")}
                disabled
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                className="hover:bg-yellow-500 hover:text-black"
                onClick={() => handleCartButton("Product Available")}
              >
                Add to Cart
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProductCard;
