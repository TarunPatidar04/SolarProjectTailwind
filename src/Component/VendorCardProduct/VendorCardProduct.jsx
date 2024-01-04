import React from "react";
import nav1 from "../VendorCardProduct/Images/nav1.png";
import nav2 from "../VendorCardProduct/Images/nav2.png";
import nav3 from "../VendorCardProduct/Images/nav3.png";
import nav4 from "../VendorCardProduct/Images/nav4.png";
import nav5 from "../VendorCardProduct/Images/nav5.png";
import nav6 from "../VendorCardProduct/Images/nav6.png";
import nav7 from "../VendorCardProduct/Images/nav7.png";
import star from "../VendorCardProduct/Images/star.png";
import mono from "../VendorDetaillls/Images/mono.png";
export default function VendorCardProduct() {
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
              <h1 className="text-2xl font-semibold text-bluee">Product List</h1>
            </div>

            <div className="Details ">
            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>

                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>

                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>

                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>

                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded mb-6">
                <div class="overflow-hidden">
                  <img src={mono} alt="" className="" />
                </div>
                <div className="text-left m-3">
                  <p class="py-2 font-bold text-[20px] ">
                    Monocrystalline Solar Panels (Mono-SI)
                  </p>
                  <p class="py-2 text-[13px] ">
                    Find the right products that fits your budget and needs.
                  </p>
                  <div className="flex">
                    {" "}
                    <img
                      src={star}
                      alt=""
                      className="max-w-[100px] mb-2 "
                    />{" "}
                    <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                  </div>
                  <span className="font-bold">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>
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