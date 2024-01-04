import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import GreenCerti from "./Images/GreenCerti.png";
import Solar1 from "./Images/Solar1.png";
import Solar2 from "./Images/Solar2.png";
import Solar3 from "./Images/Solar3.png";
import Solar4 from "./Images/Solar4.png";
import Original from "./Images/Original.png";
import Money from "./Images/money.png";
import Protection from "./Images/Protection.png";
import Warranty from "./Images/warranty.png";
import Person from "./Images/Person.png";

export default function Monosi() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="main flex -p-3">
      <div className="block md:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {/* Insert your hamburger menu icon here */}
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>

      <div
        className={`sidebar s:absolute md:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } md:block lg:w-[15%] md:w-[17%] s:w-[40%] s:h-[80%] md:h-[100vh] m-2 z-40 s:bg-gray-100 md:bg-white`}
      >
        <ul className="flex flex-col md:gap-y-5 s:gap-y-4  pt-28 pl-6 s:-mr-2  md:mr-4 s:-mt-14 md:-mt-6">
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={profile}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Profile
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={profile}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Vendor
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={userEng}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            User
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={notificationVendor}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Notification
          </li>

          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={GreenCerti}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 bg-black"
            />
            Green Certificate
          </li>
          <li className="-ml-2">
            <p>&larr; Logout</p>
          </li>
        </ul>
      </div>

      <div className="content w-full lg:w-[85%] md:w-[83%] s:w-[100%]  h-[100vh] relative z-0">
        <div className="navbar  md:p-10 s:p-8 md:-mt-5 s:-mt-5">
          <div className=" flex items-center   justify-end gap-x-2  md:-mb-5 s:-mb-10  s:text-sm ">
            <img
              src={profile}
              alt=""
              className="w-7  mt-2 s:w-4 s:opacity-50 md:opacity-100"
            />
            <span className="md:mt-2  s:mt-2 md:ml-0  font-semibold">
              profile
            </span>

            <span className=" md:ml-10 s:ml-10 md:mr-5 md:mt-2 s:mt-2 font-semibold text-red-500">
              Logout
            </span>
          </div>
        </div>

        <div className="bg-gray-400 p-3  min-h-full">
          <div className="bg-white min-h-[100vh] ">
            <div className="first-column flex justify-start  ">
              <button
                type="button"
                class="text-white bg-bt  hover:bg-bt  focus:outline-none    font-medium  text-sm p-8 text-center inline-flex items-center mr-2 "
              >
                <span className="text-red-400 md:text-2xl  font-bold s:text-sm">
                  &larr;
                </span>
              </button>
              <div className="  md:p-10  s:p-5 s:-ml-2 w-full text-bluue md:font-bold s:font-semibold md:text-[16px] s:text-[14px] border border-b-4">
                Monocrystalline Solar Panels (Mono-SI)
              </div>
            </div>

            <div className="second-column m-16 grid grid-cols-2  ">
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
            <div className=" Third-column mt-10 ml-16 flex gap-x-16  ">
              <img src={Original} alt="" className="w-[230px] h-[200px]" />
              <img src={Money} alt="" className="w-[230px] h-[200px]" />
              <img src={Protection} alt="" className="w-[230px] h-[200px]" />
              <img src={Warranty} alt="" className="w-[230px] h-[215px]" />
            </div>

            <hr className="border border-b-4  max-w-full" />

            <div className="Fourth-Column m-16">
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
                  monocrystalline cells and PERC cell design. It is an advanced
                  version of monocrystalline solar panels, designed to increase
                  efficiency and performance.
                </p>

                <p className="mt-5">
                  Mono PERC technology refers to the passivation of the solar
                  cell's rear surface, which helps reduce energy losses and
                  increase the overall efficiency of the panel. This passivation
                  layer minimizes recombination of charge carriers, allowing
                  more electrons to be extracted from the cell and converted
                  into electricity.
                </p>

                <p className="mt-5">
                  Half-cut solar panels are constructed by dividing the
                  standard-sized solar cells into two halves. Each half
                  functions as an individual sub-cell, connected in series to
                  create higher voltage output. The separation of cells reduces
                  resistive losses and improves the panel's performance,
                  especially under shading conditions. Half-cut panels also have
                  lower current, which reduces internal losses, improves
                  temperature coefficients, and enhances overall system
                  performance.
                </p>

                <p className="mt-5">
                  The combination of mono PERC technology and half-cut design
                  results in several benefits: Higher Efficiency: Mono PERC
                  technology increases the conversion efficiency of
                  monocrystalline cells by improving light absorption and
                  reducing electron recombination. The half-cut design further
                  enhances efficiency by reducing resistive losses and improving
                  performance in shaded conditions. Overall, mono PERC half-cut
                  panels can achieve higher efficiency compared to traditional
                  monocrystalline panels. Improved Performance in Shading: The
                  half-cut design allows each sub-cell to operate independently.
                  If one part of the panel is shaded, the other part continues
                  to produce power, reducing the impact of shading on the
                  overall panel performance. This is particularly advantageous
                  in situations where partial shading is common, such as from
                  trees, chimneys, or neighboring buildings.
                </p>

                <p className="mt-5">
                  Buy Luminous 24 V 540 W Mono PERC Half Cut Solar Panel online
                  in India at wholesale rates. If you have been looking for
                  Luminous 24 V 540 W Mono PERC Half Cut Solar Panel dealers,
                  your search ends here as you can get the best Luminous 24 V
                  540 W Mono PERC Half Cut Solar Panel distributors in top
                  cities such as Delhi NCR, Mumbai, Chennai, Bengaluru, Kolkata,
                  Chennai, Pune, Jaipur, Hyderabad and Ahmedabad. You can
                  purchase Luminous 24 V 540 W Mono PERC Half Cut Solar Panel of
                  the finest quality and rest assured to get the best in terms
                  of both durability and performance. If you are bothered about
                  the Luminous 24 V 540 W Mono PERC Half Cut Solar Panel prices,
                  you can be totally sure to get the best rates as
                  Industrybuying brings you genuine Luminous 24 V 540 W Mono
                  PERC Half Cut Solar Panel rates and quality assured products
                  only from the best of brands with exclusive brand discounts
                  you won’t find anywhere else. Procure Luminous 24 V 540 W Mono
                  PERC Half Cut Solar Panel today and avail the best offers on
                  your purchase.
                </p>
              </div>
            </div>
            <hr className="border border-b-4  max-w-full" />

            <div className="fifth-column m-16">
              <div className=" md:ml-3 s:ml-5 s:mt-5 md:mt-3 s:mb-3">
                <p className="md:text-lg font-semibold s:text-2xl xl2:text-2xl">
                  Likes
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
            <hr className="border border-b-4  max-w-full" />

            <div className="sixth-section m-16 ">
              <p className="md:text-lg font-semibold s:text-2xl xl2:text-2xl mb-10">
                Review
              </p>
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
                    I hope this message finds you well. I am writing to kindly
                    request your assistance
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
                    <p className="text-gray-400 font-semibold text-lg ml-10 ">Reply</p>

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
                    I hope this message finds you well. I am writing to kindly
                    request your assistance
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
                    <p className="text-gray-400 font-semibold text-lg ml-10 ">Reply</p>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
