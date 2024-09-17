/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Use the correct type for cart items
  const items = useSelector((state: RootState) => state.cart.items);

  // Ensure the type of totalQuantity is a number
  const totalQuantity = items.reduce(
    (total: any, item: any) => total + (item.quantity ?? 0),
    0
  );

  return (
    <nav className="p-4 bg-white overflow-hidden lg:fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-14">
        <a href="/">
          <div className="text-3xl font-bold flex justify-center items-center">
            <img
              className="w-16 lg:w-20 pl-0 md:pl-4 lg:pl-0"
              src="https://i.ibb.co/ZSxJJnt/brand-logo-Photoroom.png"
              alt="Brand Logo"
            />
            <div className="-ml-2">
              Key<span className="text-yellow-500">Master</span>
            </div>
          </div>
        </a>
        <div className="hidden lg:pt-7 md:pt-6 md:flex space-x-4 font-medium text-lg text-slate-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "hover:text-yellow-500 font-bold text-yellow border-b-2 mb-4 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            Cart
          </NavLink>
          <NavLink to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 rounded-xl relative lg:right-[-487px] bg-slate-700 text-white p-2 md:right-[-30px]"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <div className="w-6 bg-amber-300 rounded-full relative lg:right-[-460px] h-6 lg:top-[-10px] md:top-[-12px] pl-2">
            <div className="-mt-[2px]">{totalQuantity}</div>
          </div>
        </div>
        <div className="md:hidden pl-24">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <NavLink to="/" className="hover:text-yellow-500">
            Home
          </NavLink>
          <NavLink to="/products" className="hover:text-yellow-500">
            Products
          </NavLink>
          <NavLink to="/services" className="hover:text-yellow-500">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-yellow-500">
            Contact
          </NavLink>
          <NavLink to="/dashboard" className="hover:text-yellow-500">
            Dashboard
          </NavLink>
          <NavLink to="/cart" className="hover:text-yellow-500">
            Cart
          </NavLink>

          <NavLink to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 rounded-xl relative bg-slate-700 text-white p-2"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <div className="w-6 bg-amber-300 rounded-full relative right-[-30px] h-6 top-[-60px] pl-2 -mt-[2px]">
            <div>{totalQuantity}</div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
