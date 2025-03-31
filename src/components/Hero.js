const HeroSection = () => {
    return (
      <main className="hero container flex mt-0 mb-0 ml-auto mr-auto max-w-7xl items-center h-[calc(100vh-72px)]">
        <div className="hero-content">
          <h1 className="text-[108px] font-bold leading-[102px] w-[677px]">YOUR FEET DESERVE THE BEST</h1>
          <p className="font-medium w-[693px] mt-10 mb-10">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn flex gap-10">
            <button className="bg-red-600 h-7 w-25 text-white">Shop Now </button>
            <button className="secondary-btn bg-transparent text-gray-900 border-2 w-[92px]">Category</button>
          </div>
  
          <div className="shopping mt-5">
            <p className="text-[14px]">Also Available On</p>
  
            <div className="brand-icons flex gap-5 mt-5">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image flex">
          <img src="/images/shoe_image.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;
