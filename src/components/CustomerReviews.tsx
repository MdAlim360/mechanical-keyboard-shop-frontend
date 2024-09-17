import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";

const reviews = [
  {
    rating: 5,
    text: "I can recommend this company without any doubt. Good job, guys!",
    author: "Janet Jones",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    rating: 5,
    text: "Good variety of cat food, easy to set up bottomless bowl options, so cats are happy!",
    author: "Sharron Hollins",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    rating: 5,
    text: "I’ve used Petopia for years and have always been a happy customer!",
    author: "James Raywood",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    rating: 5,
    text: "I’ve used Petopia for years and have always been a happy customer!",
    author: "James Raywood",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    rating: 5,
    text: "I’ve used Petopia for years and have always been a happy customer!",
    author: "James Raywood",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    rating: 5,
    text: "I’ve used Petopia for years and have always been a happy customer!",
    author: "James Raywood",
    daysAgo: 3,
    image: "https://via.placeholder.com/150",
  },
  // Add more reviews as needed
];

const CustomerReviews = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between items-center p-6 bg-white  rounded-md">
      <div className="flex flex-col items-center lg:[100px] lg:items-start ">
        <h2 className="text-3xl font-semibold -mt-20">Excellent</h2>
        <span className=" text-sm font-medium text-gray-600">
          Based on 20,921 reviews
        </span>
        <div className=" items-center mt-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.21c.969 0 1.371 1.24.588 1.81l-3.407 2.475a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.407-2.475a1 1 0 00-1.175 0l-3.407 2.475c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.226 9.385c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.691L9.049 2.927z" />
              </svg>
            ))}
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.21c.969 0 1.371 1.24.588 1.81l-3.407 2.475a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.407-2.475a1 1 0 00-1.175 0l-3.407 2.475c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.226 9.385c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.691L9.049 2.927z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-[1000px]  w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={10}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" p-4  rounded-md  h-[250px] w-[300px]">
                <div className="flex items-center pl-24 md:pl-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.21c.969 0 1.371 1.24.588 1.81l-3.407 2.475a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.407-2.475a1 1 0 00-1.175 0l-3.407 2.475c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.226 9.385c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.691L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-600 pl-10 md:pl-10">
                  {review.text}
                </p>
                <div className="flex items-center mt-4 pb-8 pl-10 md:pl-10">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-800">
                      {review.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {review.daysAgo} days ago
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next  "></div>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
