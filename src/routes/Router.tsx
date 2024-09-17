import About from "@/components/About";
import CheckoutForm from "@/components/CheckoutForm";
import Contact from "@/components/Contact";
import Layout from "@/components/layout/Layout";
import OrderConfirmation from "@/components/OrderConfirmation";
import Cart from "@/pages/Cart";
import Dashboard from "@/pages/Dashboard";
import Homepage from "@/pages/Homepage";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        // path: "home",
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "details/:productId",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "checkout",
        element: <CheckoutForm></CheckoutForm>,
      },
      {
        path: "order-confirm",
        element: <OrderConfirmation></OrderConfirmation>,
      },
      {
        path: "services",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  // { path: "/products", element: <Products></Products> },
]);

export default router;
