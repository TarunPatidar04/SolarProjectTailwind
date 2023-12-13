import React, { useState } from "react";
import profile from "./Images/profile.png";
import product from "./Images/product.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import mono from "./Images/mono.png";
import star from "./Images/star.png";
export default function () {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    console.log("wertyui");
    setIsOpen(!isOpen);
  };

  return (
    <div className="main flex">
      <button
        className="menu-bar md:hidden p-3 z-999 absolute "
        id="menuBar"
        onClick={showSidebar}
      >
        <i className="fas fa-bars fa-xl"></i>
      </button>

      <div
        className={`${
          isOpen === true ? "block" : "hidden"
        } sidebar h-screen sm:break-words  md:block md:relative`}
      >
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 s:-mr-3 ">
          <li className="-mb-2 items-center gap-x-2 s:-ml-3 s:text-sm font-semibold">
            <img
              src={profile}
              alt=""
              className="w-7 s:w-4 s:opacity-50 md:opacity-100 "
            />
            Profile
          </li>
          <li className=" -mb-2 items-center gap-x-2 s:text-sm s:-ml-3 font-semibold">
            <img
              src={notificationVendor}
              alt=""
              className="w-7 s:w-4 s:opacity-50 md:opacity-100"
            />
            Notification
          </li>
          <li className=" items-center gap-x-2 s:text-sm s:-ml-3 font-semibold -mb-2">
            <img
              src={product}
              alt=""
              className="w-7 s:w-4 s:opacity-50 md:opacity-100"
            />
            Product
          </li>
          <li className=" items-center gap-x-2 break-words s:text-sm s:-ml-3 font-semibold">
            <img
              src={userEng}
              alt=""
              className="w-7 s:w-4 s:opacity-50 md:opacity-100"
            />
            Engagement
          </li>
        </ul>
      </div>

      <div className="content  w-[100%] h-[100vh] ">
        <div className="flex items-center   justify-end gap-x-1  -mb-5  s:text-sm ">
          <img
            src={profile}
            alt=""
            className="w-7  mt-2 s:w-4 s:opacity-50 md:opacity-100"
          />
          <span className="mt-2 font-semibold">profile</span>

          <span className=" ml-10 mr-5 mt-2 font-semibold">Logout</span>
        </div>

        <div className=" w-[100%] h-[100vh]  ">
          <div className="Details">
            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
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
                  <span className="font-bold ">₹29,900</span>
                  <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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

              <div class="text-center shadow-lg rounded">
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
  );
}
