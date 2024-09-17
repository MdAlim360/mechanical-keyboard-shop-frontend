function TopBrand() {
  const brands = [
    {
      img: "https://i.ibb.co/7Y8sxmt/Screenshot-2024-07-28-165321.png",
    },
    {
      img: "https://i.ibb.co/zNmdR04/image-processing20201209-20744-1j52no4.jpg",
    },
    {
      img: "https://i.ibb.co/b6NY8YM/CORSAIRLogo2020-stack-K.png",
    },
    {
      img: "https://i.ibb.co/8zP3hFd/o-Nn-HUQKv-400x400.jpg",
    },
    {
      img: "https://i.ibb.co/j8V819D/Screenshot-2024-07-28-165702.png",
    },
    {
      img: "https://i.ibb.co/wsczTvc/Steelseries-logo.png",
    },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-8">
      {brands.map((brand, index) => (
        <div key={index} className="flex justify-center">
          <img
            className="w-44 h-24 rounded-lg px-8 md:px-4 lg:px-8 py-2 bg-[#F5F5F5]"
            src={brand.img}
            alt={`Brand ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default TopBrand;
