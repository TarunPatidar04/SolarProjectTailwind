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
     <nav className="bg-white w-full md:h-[15%] s:h-[15%] md:p-2 s:py-1">
        <div className="flex lg:gap-x-10 md:gap-x-7 s:gap-x-1.5 justify-center items-center ">
          <img src={nav1} alt="" className="w-[6%] " />
          <img src={nav2} alt="" className="w-[7%]" />
          <img src={nav3} alt="" className="w-[16%]" />
          <img src={nav4} alt="" className="w-[8%]" />
          <img src={nav5} alt="" className="w-[7%]" />
          <img src={nav6} alt="" className="w-[13%]" />
          <img src={nav7} alt="" className="w-[7%]" />
          <button className="text-red-600 font-semibold md:text-[14px] s:text-[0.5rem]">Log Out</button>
        </div>
      </nav>

      <div className="bg-[#8A8F93] w-full">
        <div className="bg-white w-[85%]  mx-auto my-8">
          <div>
            <div className="p-8">
              <h1 className="s:text-[14px] md:text-[16px] lg:text-xl font-semibold text-bluee">
                Monocrystalline Solar Panels (Mono-SI)
              </h1>
            </div>
            <div className="Details">
              <div className="first-column md:m-14 s:m-2 md:grid md:grid-cols-2  ">
                <div className="image-section s:ml-6  md:ml-0">
                  <img src={Solar1} alt="" className="w-[70%]" />
                <div>
                <div className="threeImage flex justify-stretch gap-x-4 mt-5">
                    <img src={Solar2} alt="" className="w-[20%]" />
                    <img src={Solar3} alt="" className="w-[20%]" />
                    <img src={Solar4} alt="" className="w-[20%]" />
                  </div>
                </div>
                </div>
                <div className="text-section  mt-14 lg:text-[16px] md:text-[14px] s:text-[12px]">
                  <div className="  w-[100%]    ">
                    <p className="text-bluue  md:text-[16px] lg:text-xl font-bold">
                      {" "}
                      Monocrystalline Solar Panels (Mono-SI)
                    </p>
                    <p className="font-semibold s:text-[12px] md:text-[0.8rem] lg:text-[0.9rem]">
                      <span className="text-[#000000]  ">By</span>{" "}
                      <span className="text-[#E87800]">LUMINUS</span>
                    </p>
                    <p className="md:text-[16px] lg:text-lg">
                      After installation of net meter and inspection by{" "}
                      <span className="text-bluue  font-semibold ">
                        Gov of India
                      </span>{" "}
                      will generate commissioning certificate from portal
                    </p>

                    <p className="font-semibold text-[#000000] ">Features</p>

                    <ul className=" lg:text-[16px] md:text-[14px]">
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

                    <button className="bg-gray-200 md:p-2  s:p-1 rounded border-2 border-gray-300 mt-10 w-[40%] s:text-[10px] md:text-[12px]">
                      MORE DETAILS
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border border-b-4  max-w-full" />
              <div className=" Second-column mt-10  flex justify-evenly mx-auto  mb-3">
                <img src={Original} alt="" className="w-[20%] h-auto" />
                <img src={Money} alt="" className="w-[20%] h-auto" />
                <img src={Protection} alt="" className="w-[20%] h-auto" />
                <img src={Warranty} alt="" className="w-[20%] h-auto -mb-3 " />
              </div>

              <hr className="border border-b-4  max-w-full" />

              <div className="Third-Column md:m-14 s:m-2">
                <div className="button-section w-[40%] s:text-[10px] md:text-[14px] lg:text-[16px]">
                  <button className="bg-gray-300 md:p-3 s:p-1 border-2 border-gray-400 rounded">
                    DESCRIPTION
                  </button>
                  <button className="bg-gray-300 md:p-3 s:p-1 border-2 border-gray-400 rounded">
                    SPECIFICATION
                  </button>
                </div>

                <div className="text-section  s:text-[12px] md:text-[14px] lg:text-[16px]">
                  <p className="md:mt-16 s:mt-5">
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

              <div className="fourth-column  md:m-14 s:m-2">
                <div className=" md:ml-3  s:mt-5 md:mt-3 s:mb-3">
                  <p className="flex  font-semibold s:text-[12px] md:text-[16px] lg:text-lg xl2:text-xl justify-between">
                    <p>Rating</p>
                    <p className="s:ml-14">
                      Review
                      <p>
                        45461 <span className="s:text-[12px] md:text-[16px] lg:text-lg">global ratings</span>
                      </p>
                    </p>
                  </p>

                  <div className="flex items-center md:mt-8 s:mt-1 s:ml-10 xl2:ml-14 md:ml-16 lg:ml-12 mb-4 s:w-[70%] md:w-[100%] ">
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
                    <p className="md:ms-1 s:text-[8px] md:text-[14px] lg:text-[1rem] font-medium s:ml-1 md:ml-3">
                      4
                    </p>
                    <p className="md:ms-1 s:text-[8px] md:text-[14px] lg:text-[1rem] font-medium s:ml-1">
                      out of
                    </p>
                    <p className="md:ms-1 s:text-[8px] md:text-[14px] lg:text-[1rem] font-medium s:ml-1">
                      5
                    </p>
                    <p className="s:text-[8px] md:text-[0.7rem] lg:text-[1rem] s:mt-8 md:mt-auto xl2:ml-40 lg:ml-14 s:ml-2">
                      200021 global likes
                    </p>
                  </div>


                  
                  <div className="flex items-center md:mt-6 s:mt-1 s:ml-3 md:ml-0">
                    <a
                      href="##"
                      className="md:text-sm s:text-[10px] s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      5 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-[10px] s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      60%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-5 s:ml-3 md:ml-0">
                    <a
                      href="##"
                      className="md:text-sm s:text-[10px] s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      4 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-[10px] s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      20%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-5 s:ml-3 md:ml-0">
                    <a
                      href="##"
                      className="md:text-sm s:text-[10px] s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      3 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-[10px] s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      70%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-5 s:ml-3 md:ml-0">
                    <a
                      href="##"
                      className="md:text-sm s:text-[10px] s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      2 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-[10px] s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      30%
                    </span>
                  </div>
                  <div className="flex items-center md:mt-3 s:mt-5 s:ml-3 md:ml-0">
                    <a
                      href="##"
                      className="md:text-sm s:text-[10px] s:-mt-1 md:mt-auto xl2:text-lg font-medium text-[#235688]"
                    >
                      1 star
                    </a>
                    <div className="w-[50%] md:h-5 xl2:h-7 s:h-5 mx-4 bg-[#D9D9D9] rounded-sm">
                      <div
                        className="md:h-5 s:h-5 xl2:h-7 bg-[#FFA41C] rounded-sm"
                        style={{ width: "9%" }}
                      ></div>
                    </div>
                    <span className="md:text-sm s:text-[10px] s:-mt-1 xl2:text-lg md:mt-auto font-medium text-[#235688]">
                      9%
                    </span>
                  </div>
                </div>
              </div>

              <div className="sixth-section md:m-14 s:m-2 ">
                <p className="md:text-lg font-semibold s:text-[12px]  md:text-[14px]   xl2:text-xl mb-10 flex gap-11">
                  <p className=" hover:border-b-2 border-b-2 border-black hover:border-black  cursor-pointer">
                    Review
                  </p>{" "}
                  <p className=" hover:border-b-2 hover:border-black cursor-pointer">
                    Rating
                  </p>
                </p>
                <hr className="border border-b-2 -mt-10 md:mb-10 s:mb-5  max-w-full" />

                <div className="max-h-[40%]  w-[100%] overflow-y-auto s:text-[12px]  md:text-sm ">
                  <div className="md:flex  bg-gray-100 mt-3 p-5 ">
                    <div className="md:w-16 md:h-16 s:w-[30%] rounded s:mx-auto md:mx-0">
                      <img
                        className="object-cover md:w-full md:h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" md:ml-8 s:mt-5 md:-0 ">
                      <div className="md:flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="md:ml-4">10 days ago</span>
                      </div>
                      <p className="md:mt-2 s:mt-1">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                    </div>
                  </div>
                  <div className="md:flex  bg-gray-100 mt-3 p-5 ">
                    <div className="md:w-16 md:h-16 s:w-[30%] rounded s:mx-auto md:mx-0">
                      <img
                        className="object-cover md:w-full md:h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" md:ml-8 s:mt-5 md:-0 ">
                      <div className="md:flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="md:ml-4">10 days ago</span>
                      </div>
                      <p className="md:mt-2 s:mt-1">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                    </div>
                  </div>
                  <div className="md:flex  bg-gray-100 mt-3 p-5 ">
                    <div className="md:w-16 md:h-16 s:w-[30%] rounded s:mx-auto md:mx-0">
                      <img
                        className="object-cover md:w-full md:h-full"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div className=" md:ml-8 s:mt-5 md:-0 ">
                      <div className="md:flex">
                        <p className="text-[#233965] font-semibold ">
                          Dhanajaysagar145@gmail.com
                        </p>{" "}
                        <span className="md:ml-4">10 days ago</span>
                      </div>
                      <p className="md:mt-2 s:mt-1">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form action="">
                <div className="md:p-14 s:p-5 w-[100%]">
                  <div class="flex">
                    <input
                      type="search"
                      id="search-dropdown"
                      className=" md:p-2.5 s:p-2 md:w-[40%]  s:w-[100%]  text-sm text-gray-900 bg-gray-50  rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search"
                    />
                    <button className="md:p-2.5 s:p-2 h-full md:w-[15%]  text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-Section bg-gray-200 w-full h-auto p-10 -mb-10">
        <div className="flex s:flex-col md:flex-row s:space-y-8 md:space-y-0 justify-between">
          <form className="md:w-[90%] s:w-full">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-sm md:w-[50%] s:w-[100%]"
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
                className="pl-10 pr-4 py-2 border rounded-sm md:w-[50%] s:w-[100%]"
                placeholder="Enter Password"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <div className="absolute inset-y-0 left-0 md:ml-[43%] s:ml-[85%] flex items-center cursor-pointer">
                <i className="fa-solid fa-eye-slash text-gray-400"></i>
              </div>
            </div>
            <div className="">
              <button className="bg-[#23568845] p-2 text-black font-semibold mt-5 md:w-[50%] s:w-[100%]">
                Log In
              </button>
            </div>
          </form>
          <div className="image-section flex space-y-2 lg:mr-20 s:mr-10 lg:space-x-20 md:space-x-7 s:space-x-6 md:w-[60%] s:w-[100%]">
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
              <img src={nav2} alt="" className="md:w-[100px] s:w-[150px]" />
              <img
                src={nav6}
                alt=""
                className="md:w-[100px] md:h-auto s:w-[200px] s:h-[25px]"
              />
              <img
                src={nav3}
                alt=""
                className="md:w-[100px] md:h-[20px] s:w-[220px] s:h-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
