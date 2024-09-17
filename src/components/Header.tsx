import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import CountDownTimer from "./CountDownTimer";
import { Button } from "./ui/button";

const cardData = [
  {
    imgSrc: "https://i.ibb.co/TtJ9qdC/keyboard-1-Photoroom.png",
    text: "Card 1",
    countdown: (
      <CountDownTimer targetDate={"2024-07-17T23:59:59"}></CountDownTimer>
    ),
    title: "Xiaomi smart mechanical 15thin &",
    subtitle: "light keyboard",
    price: "৳১০০০০",
    discount: "৳৭০০",
    offerTitle1: "Special",
    offerTitle2: "Monthly",
    offerTitle3: "Offer",
    enjoyTag: "Enjoy, Let's go...",
  },
  {
    imgSrc: "https://i.ibb.co/RNQhDDj/Screenshot-2024-07-27-220104.png",
    text: "Card 1",
    countdown: (
      <CountDownTimer targetDate={"2024-07-17T23:59:59"}></CountDownTimer>
    ),
    title: "samsung smart mechanical 15thin &",
    subtitle: "light keyboard",
    price: "৳১০০০০",
    discount: "৳৭০০",
    offerTitle1: "Special",
    offerTitle2: "Monthly",
    offerTitle3: "Offer",
    enjoyTag: "Enjoy, Let's go...",
  },
  // Add more card objects here
];

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = cardData.length;
  const autoPlayInterval = 3000; // 3 seconds

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, autoPlayInterval);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [autoPlayInterval, totalItems]);

  return (
    <div className="flex justify-center items-center w-full">
      <Carousel className="w-full overflow-hidden relative">
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              <div className="p-1  h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Card className=" bg-slate-400 h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full bg-cover bg-center bg-[#F3F6FB]">
                    <div
                      className="h-[400px] sm:h-[350px] md:h-[250px] lg:h-[300px]"
                      style={{
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${card.imgSrc})`,
                      }}
                    ></div>
                    <div className="mt-4">{card.countdown}</div>
                    <div className="mt-4 lg:absolute lg:right-[100px] lg:top-[240px] text-center lg:text-left">
                      <p className="text-xs sm:text-lg lg:text-xl font-bold">
                        {card.title}
                        <br />
                        <span className="lg:relative lg:left-[90px] lg:text-xl sm:text-sm">
                          {card.subtitle}
                        </span>
                      </p>
                      <p className="lg:absolute lg:right-[90px] lg:top-[80px] text-lg sm:text-2xl lg:text-3xl mt-2 lg:mt-0">
                        {card.price}
                        <span className="line-through pl-2 text-slate-400 text-xs sm:text-lg">
                          {card.discount}
                        </span>
                      </p>
                      <Button className="mt-4 lg:absolute lg:right-[90px] lg:top-[150px] hover:bg-yellow-400 hover:text-black px-4 sm:px-10 rounded-3xl text-xs sm:text-sm lg:text-base">
                        Buy Now
                      </Button>
                    </div>
                    <div className="hidden lg:block lg:visible mt-4 text-center lg:text-left lg:font-medium lg:absolute lg:left-[170px] text-lg sm:text-2xl lg:text-6xl">
                      <p>{card.offerTitle1}</p>
                      <p>{card.offerTitle2}</p>
                      <p>{card.offerTitle3}</p>
                      <p className="text-xs sm:text-lg pt-6 text-slate-500">
                        {card.enjoyTag}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white"
          onClick={() =>
            setActiveIndex((activeIndex - 1 + totalItems) % totalItems)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white"
          onClick={() => setActiveIndex((activeIndex + 1) % totalItems)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </Carousel>
    </div>
  );
}

export default Header;
