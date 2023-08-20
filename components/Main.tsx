import Link from 'next/link';
import Image from 'next/image';

export default function Main() {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="pb-16 px-8 md:px-16 lg:py-16 lg:px-32 md:flex md:justify-between md:items-center md:gap-16">
        {/* <!-- header-content --> */}
        <div className="md:pt-12 pb-4 px-0 w-full md flex flex-col justify-between">
          <span className="bg-[#e1edff] h-10 w-28 border rounded-md flex justify-center items-center text-[blue] text-base font-semibold">Sale 70%</span>

          <h1 className="text-[#212121] text-5xl md:text-6xl font-bold tracking-wide my-12">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-gray-600 text-base font-normal leading-6 w-full md:w-3/5">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <Link href="https://example.com">
            <button className="flex justify-center items-center gap-2 leading-5 bg-[#212121] text-white text-base font-semibold p-4 w-full md:w-1/3 mt-12 mb-24">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg">
                {/* ...svg paths */}
              </svg>
              <span>Start Shopping</span>
            </button>
          </Link>
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
            <Image src="/Featured1.webp" alt="" width={300} height={200} />
            <Image src="/bustle.webp" alt="" width={300} height={200} />
            <Image src="/versace.webp" alt="" width={300} height={200} />
            <Image src="/instyle.webp" alt="" width={300} height={200} />
          </div>
        </div>

        {/* <!-- header-image --> */}
        <div className="hidden lg:block">
          <div className="relative w-[600px] h-[600px] rounded-full bg-[#ffece3]">
            <Image
              className="absolute top-[-5%]"
              src="/header.webp"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </header>
      {/*Main*/}
       {/* Event Section */}
       <section className="pb-16 px-8 md:px-16 lg:py-16 lg:px-32">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-sm md:text-xs text-[#0062f5] font-bold tracking-wider uppercase">
            Promotions
          </span>
          <h2 className="text-3xl text-[#212121] font-bold tracking-wider">
            Our Promotions Events
          </h2>
        </div>
        {/* event cards */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="w-full lg:w-1/2">
            {/* Card */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-[#d6d6d8] pt-6 px-8 mb-4">
              <div>
                <h3 className="font-bold text-3xl text-[#212121] uppercase">
                  Get up to
                  <span className="font-extrabold text-4xl">
                    60%
                  </span>
                </h3>
                <p className="font-normal text-xl tracking-wide">
                  For the summer season
                </p>
              </div>
              <Image
                className="w-[282px] h-[218px]"
                src="/event1.webp"
                alt=""
                width={282}
                height={218}
              />
            </div>
            {/* Card */}
            <div className="bg-[#212121] text-white text-center p-8 pt-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  GET 30% Off
                </h3>
                <p className="text-sm font-normal uppercase tracking-wider">
                  use promo code
                </p>
                <p className="text-base font-bold bg-[#474747] text-white tracking-widest md:tracking-[5px] py-2 px-10 mt-1 uppercase rounded-lg inline-block">
                  dineweekendsale
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full lg:w-1/2">
            {/* Card */}
            <div className="bg-[#efe1c7] my-4 md:mr-4">
              <div className="pt-6 ml-7">
                <p className="text-[15px] font-normal tracking-wider">
                  Flex Sweatshirt
                </p>
                <p>
                  <span className="line-through">$100.00</span>
                  <span className="text-lg font-semibold">
                    $75.00
                  </span>
                </p>
              </div>
              <Image
                className="pt-4 w-[360px] md:w-[410px] lg:w-[280px] h-[346px] object-contain"
                src="/event2.webp"
                alt=""
                width={360}
                height={346}
              />
            </div>
            {/* Card */}
            <div className="bg-[#d7d7d9]">
              <div className="pt-6 ml-7">
                <p className="text-[15px] font-normal tracking-wider">
                  Flex Push Button Bomber
                </p>
                <p>
                  <span className="line-through">$225.00</span>
                  <span className="text-lg font-semibold">
                    $190.00
                  </span>
                </p>
              </div>
              <Image
                className="pt-4 w-[360px] md:w-[410px] lg:w-[280px] h-[346px] object-contain"
                src="/event3.png"
                alt=""
                width={360}
                height={346}
              />
            </div>
          </div>
        </div>
      </section>
      {/*Products*/}
      <section className="pb-16 px-8 md:px-16 lg:py-16 lg:px-32">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-sm md:text-xs text-[#0062f5] font-bold tracking-wider uppercase">
          Products
        </span>
        <h2 className="text-3xl text-[#212121] font-bold tracking-wider">
          Check What We Have
        </h2>
      </div>
      {/* Product Cards */}
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center mt-16">
        {/* Product Card */}
        <div className="hover:scale-110 transition-all duration-500 ease-in cursor-pointer">
          <Image
            className="w-[380px] h-[400px] object-cover"
            src="/blackshirt.png"
            alt=""
            width={380}
            height={400}
          />
          <p className="text-lg font-semibold text-[#212121] mt-2">
            Brushed Raglan Sweatshirt
          </p>
          <p className="text-xl font-semibold text-[#212121] mt-2">$195</p>
        </div>
        {/* Product Card */}
        <div className="hover:scale-110 transition-all duration-500 ease-in cursor-pointer">
          <Image
            className="w-[380px] h-[400px] object-cover"
            src="/header.webp"
            alt=""
            width={380}
            height={400}
          />
          <p className="text-lg font-semibold text-[#212121] mt-2">
            Cameryn Sash Tie Dress
          </p>
          <p className="text-xl font-semibold text-[#212121] mt-2">$545</p>
        </div>
        {/* Product Card */}
        <div className="hover:scale-110 transition-all duration-500 ease-in cursor-pointer">
          <Image
            className="w-[380px] h-[400px] object-cover"
            src="/abc1.png"
            alt=""
            width={380}
            height={400}
          />
          <p className="text-lg font-semibold text-[#212121] mt-2">Flex Sweatshirt</p>
          <p className="text-xl font-semibold text-[#212121] mt-2">$175</p>
        </div>
      </div>
    </section>
      
     
    {/*<!-- Features -->*/}
            <section className="pb-16 px-8 md:px-16 lg:py-16 lg:px-32">
                {/*<!-- Section Title -->*/}
                <div
                    className="flex justify-center lg:justify-end pb-8 md:pb-14 lg:pb-10">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-[#212121] w-full lg:w-[45%]">
                        Unique and Authentic Vintage Designer Jewellery
                    </h2>
                </div>
                <div className="bg-[#fbfcff]">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 md:justify-center items-center">
                        
                        <div
                            className="relative grid grid-cols-2 gap-y-10 justify-center items-center">
                            {/*<!-- Background -->*/}
                            <div
                                className="absolute text-7xl md:text-[110px] leading-[110px] font-extrabold text-[#212121] opacity-[0.07]">
                                Different from others
                            </div>
                            {/*<!-- Feature Card -->*/}
                            <div className="w-[65%]">
                                <p
                                    className="text-lg font-semibold text-[#212121] leading-5 mb-4">
                                    Using Good Quality Materials
                                </p>
                                <p className="text-base font-light text-[#212121]">
                                    Lorem ipsum dolor sit amt, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            {/*<!-- Feature Card -->*/}
                            <div className="w-[65%]">
                                <p
                                    className="text-lg font-semibold text-[#212121] leading-5 mb-4">
                                    100% Handmade Products
                                </p>
                                <p className="text-base font-light text-[#212121]">
                                    Lorem ipsum dolor sit amt, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            {/*<!-- Feature Card -->*/}
                            <div className="w-[65%]">
                                <p
                                    className="text-lg font-semibold text-[#212121] leading-5 mb-4">
                                    Modern Fashion Design
                                </p>
                                <p className="text-base font-light text-[#212121]">
                                    Lorem ipsum dolor sit amt, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            {/*<!-- Feature Card -->*/}
                            <div className="w-[65%]">
                                <p
                                    className="text-lg font-semibold text-[#212121] leading-5 mb-4">
                                    Discount for Bulk Orders
                                </p>
                                <p className="text-base font-light text-[#212121]">
                                    Lorem ipsum dolor sit amt, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </div>
                        {/*<!-- Right Content -->*/}
                        <div
                            className="flex flex-col md:flex-row md:justify-center md:items-center gap-10 pt-8 md:pt-14 lg:pt-0">
                            <Image
                                className="w-[300px] h-[350px]"
                                src="/whiteHoodie.png"   
                                alt=""
                                width={100}
                                height={100} />
                            <div className="flex flex-col gap-8">
                                <p
                                    className="text-base font-light text-justify text-[#212121]">
                                    This piece is ethically crafted in our small
                                    family-owned workshop in Peru with unmatched
                                    attention to detail and care. The Natural
                                    color is the actual natural color of the
                                    fiber, undyed and 100% traceable.
                                </p>
                                <Link href="">
                                    <button
                                        className="text-sm font-bold bg-[#212121] text-white py-3 leading-4 flex justify-center items-center w-1/2">
                                        See All Products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        {/* Newsletter */}
        <section className="pb-16 px-8 md:px-16 lg:py-16 lg:px-32 overflow-hidden">
          <div className="relative flex flex-col justify-center items-center text-center">
            {/* Background */}
            <div className="absolute text-5xl md:text-7xl text-ce md:text-[110px] leading-[110px] font-extrabold text-[#212121] opacity-[0.07]">
              Newsletter
            </div>
            <p className="text-3xl md:text-4xl font-bold text-[#212121] tracking-wider leading-10 mb-2 md:mb-4">
              Subscribe Our Newsletter
            </p>
            <p className="text-base font-light text-[#212121] leading-6 mb-4 md:mb-8">
              Get the latest information and promo offers directly
            </p>
            <form className="" action="">
              <input
                className="mb-4 md:mb-0 py-[10px] pr-32 pl-5 bg-[#fcfcfc] border border-solid border-gray-400 text-sm text-black placeholder:text-gray-600 placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Input email address"
              />
              <button className="text-sm font-semibold bg-black text-white py-3 px-5 leading-4 border border-solid ml-3">
                Get Started
              </button>
            </form>
          </div>
        </section>
    </>     
  );
}
