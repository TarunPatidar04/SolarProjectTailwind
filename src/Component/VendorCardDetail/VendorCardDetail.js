import React from "react";
import nav1 from "../VendorCardDetail/Images/nav1.png";
import nav2 from "../VendorCardDetail/Images/nav2.png";
import nav3 from "../VendorCardDetail/Images/nav3.png";
import nav4 from "../VendorCardDetail/Images/nav4.png";
import nav5 from "../VendorCardDetail/Images/nav5.png";
import nav6 from "../VendorCardDetail/Images/nav6.png";
import nav7 from "../VendorCardDetail/Images/nav7.png";
import star from "../VendorCardDetail/Images/star.png";
import campany from "../VendorDetaillls/Images/campany.png";
import mono from "../VendorDetaillls/Images/mono.png";


export default function VendorCardDetail() {
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
              Vendor  Details
              </h1>
            </div>
            <div className="Details s:-mt-10 md:mt-0">
            <div>
     

            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 s:gap-7 md:m-12 s:m-16 md:mr-5 s:mr-5 md:ml-5  s:ml-5 md:px-19  s:px-19 ">
              <div className="   s:-mt-8  s:m-5   md:-mt-5  md:m-10">
                <img
                  src={campany}
                  alt=""
                  className=" xl2:max-w-[250px] lg:max-w-[200px]  md:w-[280px]  sm:max-w-[200px] m:max-w-[160px] s:w-[150px]"
                />
              </div>

              <div className="s:-mt-8   md:-mt-5 md:-ml-1 lg:ml-12  sm:-ml-1   m:-ml-3   s:-ml-2   ">
                <div className="text-pd font-bold md:text-[16px] s:text-[14px]">
                  {" "}
                  Personal details
                </div>

                <p className="pt-6  font-bold md:text-[16px] s:text-[14px]">
                  {" "}
                  shop Name
                </p>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  HPS Hydro Consultants Pvt. Ltd.
                </p>

                <h1 className="md:pt-6 s:pt-4 font-bold md:text-[16px] s:text-[14px]">
                  Contractor ID
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  RFTPCTR146
                </p>

                <h1 className="md:pt-12 s:pt-6 font-bold md:text-[16px] s:text-[14px]">
                  Email
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  info@hpconsultants.co.in
                </p>

                <h1 className="md:pt-12 s:pt-6 font-bold md:text-[16px] s:text-[14px]">
                  Phone
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  999-7163-205
                </p>
              </div>

              <div className="md:-mt-32  lg:mt-24  s:mt-0 -ml-40 max-w-[300px] md:ml-20 lg:ml-20 sm:-ml-1 m:-ml-3   s:-ml-2 ">
                <h1 className="pb-3 font-bold md:text-[16px] s:text-[14px]">
                  Address
                </h1>
                <p className="pb-3 text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  OR-264, Indus Satellite Greens Kalod Hala A. B. Road
                </p>

                <div className="md:pb-2 md:pt-6 s:pb-1 s:pt-4 font-bold md:text-[16px] s:text-[14px]">
                  Shop Timing
                </div>
                <span className="font-semibold md:text-[16px] s:text-[14px]">
                  Open
                </span>
                <span className="ml-12 font-semibold md:text-[16px] s:text-[14px]">
                  Close
                </span>
                <div></div>
                <span className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  09:30am
                </span>
                <span className="ml-6 text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  05:30pm
                </span>
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <div className="md:m-14 s:m-4">
              <h1 className="font-bold md:text-[16px] s:text-[14px]">Likes</h1>

              <div className="Likesss md:mt-5 s:mt-2 flex ">
                <img
                  src={star}
                  className="md:max-w-[100px] s:max-w-[80px] h-5 "
                  alt=""
                />
                <span className="md:ml-2 font-bold md:text-[16px] s:text-[10px]">
                  4 out of 5
                </span>
                <span className="md:ml-20 s:ml-8 font-bold md:text-[16px] s:text-[12px]">
                  200021 global likes
                </span>
              </div>

              <div className=" md:m-5 md:mb-20 ">
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    5 star
                  </a>

                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge  max-w-[60%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    60%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    4 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[20%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    20%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    3 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[70%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    70%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[30%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    30%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    1 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-ornge max-w-[9%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    9%
                  </span>
                </div>
              </div>

              <div className="product details md:mb-28 mb-28">
                <div className="md:m-7 s:m-5 flex">
                  <div className="flex-1 text-pd font-bold md:text-[16px] s:text-[14px]">
                    ProductDetails
                  </div>
                  <div className="text-bluue font-bold md:text-[16px] s:text-[14px]">
                    See All
                  </div>
                </div>

                <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
                  <div className="text-center shadow-lg rounded mb-5">
                    <div className="overflow-hidden">
                      <img src={mono} alt="" />
                    </div>

                    <div className="text-left m-3">
                      <p className="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p className="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                  <div className="text-center shadow-lg rounded mb-5">
                    <div className="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p className="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p className="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                 <div className="text-center shadow-lg rounded mb-5">
                    <div className="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p className="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p className="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                  <div className="text-center shadow-lg rounded mb-5">
                    <div className="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p className="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p className="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

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
