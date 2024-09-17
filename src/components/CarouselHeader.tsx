import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "Explore the Latest Keyboards",
      description: "Discover the best mechanical keyboards on the market.",
      image: "https://i.ibb.co/m80Kk0S/download.png",
    },
    {
      id: 2,
      title: "Gaming Keyboards for Every Gamer",
      description:
        "Find the perfect keyboard to elevate your gaming experience.",
      image: "https://i.ibb.co/hRz1G5P/download-1-2.png",
    },
    {
      id: 3,
      title: "Affordable Yet Premium",
      description: "Top-quality keyboards that won't break the bank.",
      image:
        "https://i.ibb.co/rZJV3nL/best-gaming-keyboard-under-1500-64b4dbc6c06c4.webp",
    },
    {
      id: 4,
      title: "Upgrade Your Setup",
      description: "Enhance your typing experience with our top picks.",
      image: "https://i.ibb.co/v32Rz8S/download-1.png",
    },
  ];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[70vh] flex justify-center items-center flex-col text-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 p-4">
              {/* {slide.title && (
                <h2 className="text-2xl md:text-3xl text-black mb-4">
                  {slide.title}
                </h2>
              )} */}
              {/* {slide.description && (
                <p className="text-lg md:text-xl text-white mb-8">
                  {slide.description}
                </p>
              )} */}
              {/* <Button>Shop Now</Button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHeader;
