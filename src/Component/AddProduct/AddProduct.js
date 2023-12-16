import React, { useState } from "react";
import profile from "./Images/profile.png";
import product from "./Images/product.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import Rectangle from "./Images/Rectangle.png";
import SRectangle from "./Images/SRectangle.png";
import Imagenot from "./Images/imagenot.png";

export default function AddProduct() {
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
        } md:block md:w-[20%] lg:w-[15%] xl2:w-[10%] s:w-[40%] s:h-[70%] md:h-[100vh] m-2 z-40 s:bg-gray-100 md:bg-white`}
      >
        <ul className="flex flex-col md:gap-y-5 s:gap-y-4  pt-28 pl-6 s:-mr-2  md:mr-4">
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={profile}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Profile
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base  s:text-sm font-semibold">
            <img
              src={notificationVendor}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Notification
          </li>
          <li className=" items-center gap-x-2 s:text-sm s:-ml-3 font-semibold md:-mb-2 md:flex">
            <img
              src={product}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Product
          </li>
          <li className=" items-center gap-x-2 break-words s:text-sm s:-ml-3 font-semibold md:flex">
            <img
              src={userEng}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Engagement
          </li>

          <button className=" items-center gap-x-2   break-words s:text-sm s:ml-3 font-semibold md:flex  xl2:mt-[500px] lg:mt-[420px] md:mt-[320px] s:mt-2 ">
            &larr; Logout
          </button>
        </ul>
      </div>

      <div className="content w-full md:w-[80%] lg:w-[85%] xl2:w-[90%] s:w-[100%]  h-[100vh] relative z-0">
        <div className=" md:p-10 s:p-8 md:-mt-5 s:-mt-5">
          <div className="flex items-center   justify-end gap-x-2  md:-mb-5 s:-mb-10  s:text-sm ">
            <img
              src={profile}
              alt=""
              className="w-7  mt-2 s:w-4 s:opacity-50 md:opacity-100"
            />
            <span className="md:mt-2  s:mt-2 md:ml-0  font-semibold">
              profile
            </span>

            <span className=" md:ml-10 s:ml-10 md:mr-5 md:mt-2 s:mt-2 font-semibold">
              Logout
            </span>
          </div>
        </div>

        <div className="bg-gray-400 min-h-[100vh] s:p-5 md:p-5 xl2:p-10  xl2:pb-5 lg:p-5 md:mb-22 mb-28">
          <div className="bg-white -mb-14">
            <div className="flex justify-start  ">
              <div className="lg:p-10 md:p-10 md:ml-11 lg:ml-20 s:p-5 s:ml-5 text-bluue md:font-bold s:font-semibold md:text-[16px] s:text-[14px]">
                Add New Product
              </div>
            </div>

            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 md:gap-8 s:gap-7 md:m-12 s:m-16 md:mr-5 s:mr-5 md:ml-5  s:ml-5 md:px-19  s:px-19 ">
              <div className="   s:-mt-8  s:m-5   md:-mt-5  md:m-10 xl2:ml-32 lg:ml-30">
                <img
                  src={Rectangle}
                  alt=""
                  className="xl2:max-w-[350px] lg:max-w-[300px]  md:max-w-[180px]  sm:max-w-[140px] m:max-w-[120px] s:max-w-[100px]"
                />
              </div>

              <div className="form">
                <form>
                  <label>
                    <p>Product Name</p>
                    <input
                      type="text"
                      placeholder="HPS Hydro Consultants Pvt. Ltd."
                      className="bg-gray-200 lg:w-[270px] md:w-[250px]"
                    />
                  </label>{" "}
                  <br /> <br />
                  <label>
                    <p>Product Info.</p>
                    <textarea
                      name=""
                      id=""
                      className="bg-gray-200 resize-none lg:w-[270px] md:w-[250px]"
                    ></textarea>
                  </label>{" "}
                  <br />
                  <br />
                  <label>Availability</label>
                  <br />
                  <label>
                    <input type="radio" name="gender" value="male" />
                    In Stock
                  </label>
                  <label className="ml-10">
                    <input type="radio" name="gender" value="female" />
                    Out Stock
                  </label>
                  <br />
                  <br />
                  <input type="date" name="" id="" className="bg-gray-200" />
                  <br /> <br />
                  <button class="bg-bluee hover:bg-bluee text-white font-bold py-2 px-5 ">
                    Complete
                  </button>
                  <br />
                  <br />
                  <button class="bg-gray-300 hover:bg-gray-700 text-blue-900 font-bold py-2 px-5 xl2:mb-5">
                    Add New Product
                  </button>
                </form>
              </div>

              <div>
                <div className="imge flex gap-5  xl2:-mt-2 lg:-mt-5">
                  <img
                    src={SRectangle}
                    alt=""
                    className="xl2:-mt-32 lg:-mt-32 md:-mt-60 xl2:w-[15%] xl2:h-[10%] xl2:ml-56 lg:ml-28 md:ml-20  lg:w-[15%] lg:h-[10%] md:w-[15%] md:h-[10%] s:hidden md:block"
                  />
                  <img
                    src={Imagenot}
                    alt=""
                    className="xl2:-mt-32 lg:-mt-32 md:-mt-60 xl2:w-[15%] xl2:h-[10%] lg:w-[15%] lg:h-[10%] bg-gray-200 md:w-[15%] md:h-[10%] s:hidden md:block"
                  />
                </div>

                <div className=" xl2:m-10 xl2:-mt-5  lg:m-10 lg:-mt-14 md:-mt-44  lg:text-lg md:text-sm s:text-sm mb-10">
                  I hope this message finds you well. I am writing to kindly
                  request your assistance in submitting three images as part of
                  our ongoing project.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
