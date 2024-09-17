/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, FormEvent } from "react";
import ProductCard from "@/components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllProductsQuery } from "@/redux/features/productsApi";
import { motion } from "framer-motion";

function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchItem, setSearchItem] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [filterMinPrice, setFilterMinPrice] = useState<string>("");
  const [filterMaxPrice, setFilterMaxPrice] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const limit = 10; // Number of products per page

  const { data, isLoading, error } = useGetAllProductsQuery({
    page: currentPage,
    limit,
    searchTerm,
    minPrice,
    maxPrice,
    sortOrder,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page when search is applied
    setSearchTerm(searchItem);
    setSearchItem("");
  };

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page when filter is applied
    setMinPrice(filterMinPrice);
    setMaxPrice(filterMaxPrice);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilterMinPrice("");
    setFilterMaxPrice("");
    setSortOrder("");
    setCurrentPage(1); // Reset to the first page when filters are cleared
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <p>Error: {(error as any).message}</p>
      </div>
    );
  }

  if (!data || !data.data || !data.data.result) {
    return (
      <div className="text-center mt-20">
        <p>No products available</p>
      </div>
    );
  }

  const totalPage = data.data.meta.totalPage;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={handleChange}
            className="border p-2 ml-0  md:ml-4 lg:ml-0  rounded-md w-full sm:w-auto px-32 md:px-56 lg:px-0"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="border p-2 rounded-md bg-yellow-500 text-white"
          >
            Search
          </motion.button>
        </form>

        <form onSubmit={handleFilter} className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            value={filterMinPrice}
            onChange={(e) => setFilterMinPrice(e.target.value)}
            className="border p-2 px-0 md:px-14 lg:px-0 rounded-md w-full sm:w-auto"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filterMaxPrice}
            onChange={(e) => setFilterMaxPrice(e.target.value)}
            className="border p-2 px-0 md:px-14 lg:px-0 rounded-md w-full sm:w-auto"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="border p-2 rounded-md bg-green-500 text-white"
          >
            Apply Filter
          </motion.button>
        </form>

        <div className="flex items-center space-x-2">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-20 md:px-[236px] lg:px-0 p-2 rounded-md w-full sm:w-auto"
          >
            <option value="">Sort By</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClearFilters}
            className="border p-2 rounded-md bg-red-500 text-white w-full sm:w-auto"
          >
            Clear All
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.data.result.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>
            {[...Array(totalPage)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPage))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default Products;
