import React from "react";
import nav1 from "../VendorMonoSI/Images/nav1.png";
import nav2 from "../VendorMonoSI/Images/nav2.png";
import nav3 from "../VendorMonoSI/Images/nav3.png";
import nav4 from "../VendorMonoSI/Images/nav4.png";
import nav5 from "../VendorMonoSI/Images/nav5.png";
import nav6 from "../VendorMonoSI/Images/nav6.png";
import nav7 from "../VendorMonoSI/Images/nav7.png";
import Solar1 from "../VendorMonoSI/Images/Solar1.png";
import Solar2 from "../VendorMonoSI/Images/Solar2.png";
import Solar3 from "../VendorMonoSI/Images/Solar3.png";
import Solar4 from "../VendorMonoSI/Images/Solar4.png";
import Warranty from "../VendorMonoSI/Images/warranty.png";
import Protection from "../VendorMonoSI/Images/Protection.png";
import Person from "../VendorMonoSI/Images/Person.png";
import Money from "../VendorMonoSI/Images/money.png";
import Original from "../VendorMonoSI/Images/Original.png";

export default function VendorMonoSI() {
  return (
    <main className="bg-[#8A8F93] w-full h-auto mb-10">
      <nav className="bg-white w-full h-[15%]">
        <div className="flex gap-x-10 justify-center items-center ">
          <img src={nav1} alt="" className="w-[70px]" />
          <img src={nav2} alt="" className="w-[90px] h-auto" />
          <img src={nav3} alt="" className="w-[250px]" />
          <img src={nav4} alt="" className="w-[90px]" />
          <img src={nav5} alt="" className="w-[80px]" />
          <img src={nav6} alt="" className="w-[180px] h-[25px]" />
          <img src={nav7} alt="" className="w-[80px]" />

          <button className="text-red-600  font-semibold ">Log Out</button>
        </div>
      </nav>

      <div className="bg-[#8A8F93] w-full">
        <div className="bg-white w-[85%]  mx-auto my-8">
          <div>
            <div className="p-8">
              <h1 className="text-xl font-semibold text-bluee">
                Monocrystalline Solar Panels (Mono-SI)
              </h1>
            </div>
            <div className="Details">
              <div className="first-column m-14 grid grid-cols-2  ">
                <div className="image-section ">
                  <img src={Solar1} alt="" className="w-[350px]" />
                  <div className="threeImage flex gap-x-5 ml-4 mt-5">
                    <img src={Solar2} alt="" className="w-[100px]" />
                    <img src={Solar3} alt="" className="w-[100px]" />
                    <img src={Solar4} alt="" className="w-[100px]" />
                  </div>
                </div>
                <div className="text-section -ml-32 mt-14">
                  <div className="  w-full    ">
                    <p className="text-bluue  text-xl font-bold">
                      {" "}
                      Monocrystalline Solar Panels (Mono-SI)
                    </p>
                    <p className="font-semibold">
                      <span className="text-[#000000]  ">By</span>{" "}
                      <span className="text-[#E87800]">LUMINUS</span>
                    </p>
                    <p className="text-lg">
                      After installation of net meter and inspection by{" "}
                      <span className="text-bluue  font-semibold ">
                        Gov of India
                      </span>{" "}
                      will generate commissioning certificate from portal
                    </p>

                    <p className="font-semibold text-[#000000] ">Features</p>

                    <ul className=" ">
                      <li className="">
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full  "></span>
                        <span className="ml-2"> Brand Name : </span>
                        <span className="ml-10"> Lumious</span>
                      </li>
                      <li>
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full"></span>
                        <span className="ml-2">No. of Cells : </span>
                        <span className="ml-[60px]"> 144cells</span>
                      </li>

                      <li>
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full"></span>
                        <span className="ml-2">Watt:</span>{" "}
                        <span className="ml-[112px]"> 540 w</span>
                      </li>
                      <li>
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full"></span>
                        <span className="ml-2"> Panel Type :</span>
                        <span className=" ml-[60px]">
                          Monocrystalline Solar Panels (Mono-SI)
                        </span>{" "}
                      </li>
                      <li>
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full"></span>
                        <span className="ml-2"> Module Voltage :</span>
                        <span className="ml-4"> 24 v</span>
                      </li>
                      <li>
                        <span className="inline-block w-2 h-2  bg-gray-500 rounded-full"></span>
                        <span className="ml-2"> Application Area :</span>
                        <span className="ml-3">
                          Government, Social Sector, Commercial, Residential,
                          Industrial
                        </span>
                      </li>
                    </ul>

                    <button className="bg-gray-200 p-3 rounded border-2 border-gray-300 mt-10">
                      MORE DETAILS
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border border-b-4  max-w-full" />
              <div className=" Second-column mt-10 ml-16 flex gap-x-16  ">
                <img src={Original} alt="" className="w-[230px] h-[200px]" />
                <img src={Money} alt="" className="w-[230px] h-[200px]" />
                <img src={Protection} alt="" className="w-[230px] h-[200px]" />
                <img src={Warranty} alt="" className="w-[230px] h-[215px]" />
              </div>

              <hr className="border border-b-4  max-w-full" />

              <div className="Third-Column m-14">
                <div className="button-section ">
                  <button className="bg-gray-300 p-4 border-2 border-gray-400 rounded">
                    DESCRIPTION
                  </button>
                  <button className="bg-gray-300 p-4 border-2 border-gray-400 rounded">
                    SPECIFICATION
                  </button>
                </div>

                <div className="text-section ">
                  <p className="mt-16">
                    Dumy text W Mono PERC Half Cut Solar Panel is a type of
                    photovoltaic (PV) panel that combines two key technologies:
                    monocrystalline cells and PERC cell design. It is an
                    advanced version of monocrystalline solar panels, designed
                    to increase efficiency and performance.
                  </p>

                  <p className="mt-5">
                    Mono PERC technology refers to the passivation of the solar
                    cell's rear surface, which helps reduce energy losses and
                    increase the overall efficiency of the panel. This
                    passivation layer minimizes recombination of charge
                    carriers, allowing more electrons to be extracted from the
                    cell and converted into electricity.
                  </p>

                  <p className="mt-5">
                    Half-cut solar panels are constructed by dividing the
                    standard-sized solar cells into two halves. Each half
                    functions as an individual sub-cell, connected in series to
                    create higher voltage output. The separation of cells
                    reduces resistive losses and improves the panel's
                    performance, especially under shading conditions. Half-cut
                    panels also have lower current, which reduces internal
                    losses, improves temperature coefficients, and enhances
                    overall system performance.
                  </p>

                  <p className="mt-5">
                    The combination of mono PERC technology and half-cut design
                    results in several benefits: Higher Efficiency: Mono PERC
                    technology increases the conversion efficiency of
                    monocrystalline cells by improving light absorption and
                    reducing electron recombination. The half-cut design further
                    enhances efficiency by reducing resistive losses and
                    improving performance in shaded conditions. Overall, mono
                    PERC half-cut panels can achieve higher efficiency compared
                    to traditional monocrystalline panels. Improved Performance
                    in Shading: The half-cut design allows each sub-cell to
                    operate independently. If one part of the panel is shaded,
                    the other part continues to produce power, reducing the
                    impact of shading on the overall panel performance. This is
                    particularly advantageous in situations where partial
                    shading is common, such as from trees, chimneys, or
                    neighboring buildings.
                  </p>

                  <p className="mt-5">
                    Buy Luminous 24 V 540 W Mono PERC Half Cut Solar Panel
                    online in India at wholesale rates. If you have been looking
                    for Luminous 24 V 540 W Mono PERC Half Cut Solar Panel
                    dealers, your search ends here as you can get the best
                    Luminous 24 V 540 W Mono PERC Half Cut Solar Panel
                    distributors in top cities such as Delhi NCR, Mumbai,
                    Chennai, Bengaluru, Kolkata, Chennai, Pune, Jaipur,
                    Hyderabad and Ahmedabad. You can purchase Luminous 24 V 540
                    W Mono PERC Half Cut Solar Panel of the finest quality and
                    rest assured to get the best in terms of both durability and
                    performance. If you are bothered about the Luminous 24 V 540
                    W Mono PERC Half Cut Solar Panel prices, you can be totally
                    sure to get the best rates as Industrybuying brings you
                    genuine Luminous 24 V 540 W Mono PERC Half Cut Solar Panel
                    rates and quality assured products only from the best of
                    brands with exclusive brand discounts you won’t find
                    anywhere else. Procure Luminous 24 V 540 W Mono PERC Half
                    Cut Solar Panel today and avail the best offers on your
                    purchase.
                  </p>
                </div>
              </div>
              <hr className="border border-b-4  max-w-full mb-4" />
              <hr className="border border-b-4  max-w-full" />

              <div className="fourth-column m-14">
                <div className=" md:ml-3 s:ml-5 s:mt-5 md:mt-3 s:mb-3">
                  <p className="flex md:text-lg font-semibold s:text-2xl xl2:text-2xl justify-between">
                    <p>Rating</p>
                    <p className="">
                      Review
                      <p>
                        45461 <span className="text-sm">global ratings</span>
                      </p>
                    </p>
                  </p>

                  <div className="flex items-center md:mt-8 s:mt-5 md:ml-auto mb-4">
                    <svg
                      className="md:w-4 md:h-4 xl2:w-7 xl2:h-7 s:w-6 s:h-6 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="md:w-4 md:h-4 xl2:w-7 xl2:h-7 s:w-6 s:h-6 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="md:w-4 md:h-4 xl2:w-7 xl2:h-7 s:w-6 s:h-6 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="md:w-4 md:h-4 xl2:w-7 xl2:h-7 s:w-6 s:h-6 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="md:w-4 md:h-4 xl2:w-7 xl2:h-7 s:w-6 s:h-6 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="md:ms-1 md:text-sm s:text-1xl xl2:text-lg font-medium ml-3">
                      4
                    </p>
                    <p className="md:ms-1 md:text-sm s:text-1xl xl2:text-lg font-medium s:ml-2">
                      out of
                    </p>
                    <p className="md:ms-1 md:text-sm s:text-1xl xl2:text-lg font-medium s:ml-2">
                      5
                    </p>
                    <p className="md:text-sm s:text-base xl2:text-lg s:mt-8 md:mt-auto ml-48">
                      200021 global likes
                    </p>
                  </div>
                  <div className="flex items-center md:mt-6 s:mt-10">
                    <a
                      href="##"
                      className="md:text-sm s:text-lg s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      5 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-lg s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      60%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-10">
                    <a
                      href="##"
                      className="md:text-sm s:text-lg s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      4 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-lg s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      20%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-10">
                    <a
                      href="##"
                      className="md:text-sm s:text-lg s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      3 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-lg s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      70%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-10">
                    <a
                      href="##"
                      className="md:text-sm s:text-lg s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      2 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-lg s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      30%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-10">
                    <a
                      href="##"
                      className="md:text-sm s:text-lg s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      1 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "9%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-lg s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      9%
                    </span>
                  </div>
                </div>
              </div>

              <div className="sixth-section m-14 ">
                <p className="md:text-lg font-semibold s:text-2xl xl2:text-2xl mb-10 flex gap-11">
                  <p className=" hover:border-b-2 border-b-2 border-black hover:border-black  cursor-pointer">
                    Review
                  </p>{" "}
                  <p className=" hover:border-b-2 hover:border-black cursor-pointer">
                    Rating
                  </p>
                </p>
                <hr className="border border-b-2 -mt-10 mb-10  max-w-full" />

                <div className="max-h-[470px] overflow-y-auto">
                  <div className="flex   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-8   bg-gray-100  p-5">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" ml-8 ">
                      <div className="flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="ml-4">10 days ago</span>
                      </div>
                      <p className="mt-2">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex  mt-2">
                        <div className="flex items-center space-x-1 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg ml-10 ">
                          Reply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form action="">
                <div className="p-14">
                  <div class="flex">
                    <input
                      type="search"
                      id="search-dropdown"
                      className=" p-2.5 w-[400px]  text-sm text-gray-900 bg-gray-50  rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search"
                    />
                    <button className="p-2.5 h-full w-[150px] text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full h-auto p-10 -mb-10">
        <div className="flex justify-between">
          <form>
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-sm w-[400px]"
                placeholder="Enter your email"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
            </div>
            <div className="relative mt-5">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-sm w-[400px]"
                placeholder="Enter Password"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <div className="absolute inset-y-0 left-0 ml-[350px] flex items-center pointer-events-none">
                <i className="fa-solid fa-eye-slash text-gray-400"></i>
              </div>
            </div>

            <div className="">
              <button className="bg-[#23568845] p-2 text-black font-semibold mt-5 w-[400px]">
                Log In
              </button>
            </div>
          </form>
          <div className="image-section flex space-y-2 mr-20 space-x-20">
            <div className="text-center">
              <img src={nav7} alt="" className="w-[100px] mx-auto" />
              <p className="mt-4 text-[14px]">
                Last Updated:{" "}
                <span className="text-[#235688] text-[14px]">
                  September 5, 2023
                </span>
              </p>
              <p className="mt-2 text-[14px]">Website Content Managed by</p>
              <p className="text-[#235688] text-[14px]">Smart City Indore</p>
            </div>
            <div className="space-y-10">
              <img src={nav2} alt="" className="w-[100px]" />
              <img src={nav6} alt="" className="w-[100px]" />
              <img src={nav3} alt="" className="w-[130px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
