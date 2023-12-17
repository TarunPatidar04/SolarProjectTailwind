import React, { useState } from "react";
import profile from "./Images/profile.png";
import product from "./Images/product.png";
import notificationVendor from "./Images/notificationVendor.png";
import Rectangle from "./Images/Rectangle.png";
import SRectangle from "./Images/SRectangle.png";
import Imagenot from "./Images/imagenot.png";

export default function AddProduct() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="main flex">
      <div className="block lg:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>
      <div
        className={`sidebar s:absolute lg:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } lg:block s:w-[50%] s:h-[100%] md:w-[25%] md:h-[100vh]  z-40  s:bg-gray-200 lg:bg-white h-screen s:break-words lg:w-[17%] xl2:w-[15%]`}
      >
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
          <li className="flex items-center gap-x-2 hover:text-white  hover:bg-[#235688]  ">
            <img src={profile} alt="" className="md:w-6 s:w-6 s:opacity-50 md:opacity-100 "  />
            Profile
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:bg-[#235688]  ">
            <img src={notificationVendor} alt="" className="md:w-6 s:w-6 s:opacity-50 md:opacity-100" />
            Notification
          </li>
          <li className="flex items-center gap-x-2 hover:text-white hover:bg-[#235688]  ">
            <img src={product} alt="" className="md:w-6 s:w-6 s:opacity-50 md:opacity-100" />
            Product
          </li>
          <div className="space-y-3 lg:hidden">
            <li className="flex items-center gap-x-2 text-sm s:-ml-2 hover:text-white hover:bg-[#235688]  ">
              <i className="fa-hand-point-left fa-solid" />
              Previous Product
            </li>
            <li className="flex items-center gap-x-2 s:-ml-2  text-sm hover:text-white hover:bg-[#235688]  ">
              <i class="fa-solid fa-cart-plus"></i>
              Add New Product
            </li>
            <li className="flex items-center gap-x-2 text-sm s:-ml-2 hover:text-white hover:bg-[#235688]  ">
              <i class="fa-solid fa-face-smile"></i>
              Review & Ratings
            </li>
          </div>

          <li className="flex items-center gap-x-2 break-words xl2:mt-[500px] md:mt-[180px] lg:mt-[440px] s:mt-[160px] ">
           <p>&larr; Logout</p>
          </li>
        </ul>
      </div>

      <div className="content h-full s:w-[100%] lg:w-[83%] xl2:w-[85%]">
        <div className="navbar md:w-[100%] s:h-14 md:h-20 bg-white flex justify-end items items-center gap-x-2">
          <img
            className="md:w-5 s:w-5  md:block "
            src={profile}
            alt=""
          />
          <span className=" md:block s:text-1xl md:text-sm md:mr-5">Dhanajay Raj</span>
          <div className="bg-gray-400 md:w-8 md:h-8 s:w-6 s:h-6 rounded-full mr-14 md:block">
            <span className="ml-3 font-bold s:text-1 xl md:text-sm s:ml-2 md:ml-3">
              ?
            </span>
          </div>
        </div>

        <div className="middle-content bg-gray-100 w-full  xl2:p-[30px] lg:p-[20px] md:p-[20px] s:p-[20px] m:p-[30px] sm:p-[40px] md:h-[50%]">
          <div className="inner-content bg-white flex overflow-hidden">
            <div className="left-content p-1  border-r-2 border-solid border-blue-100 hidden lg:block ">
              <p className="mt-20 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC] ">
                Previous Product
              </p>
              <p className="mt-5 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                Add New Product
              </p>
              <p className="mt-5 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                Review And Rating
              </p>
            </div>
            <div className="right-content">
              <div className="Review-Rating  border-solid   md:p-6 s:p-2 ">
                <p className="text-[#152C5B] font-semibold xl2:text-2xl md:text-xl md:ml-2 xl2:ml-6 s:ml-8 m:ml-14 sm:ml-16">
                  Add New Product
                </p>
              </div>
              <div className="Images-Section   border-solid  flex s:flex-col md:flex-row md:p-6 s:p-4">
                <div className="flex m:ml-5 md:ml-0 sm:ml-9">
                  <div className="column-2 md:ml-8 s:ml-4">
                    <img
                      src={Rectangle}
                      alt=""
                      className="xl2:max-w-[350px] lg:max-w-[300px]  md:max-w-[280px]  sm:max-w-[200px] m:max-w-[140px] s:max-w-[120px]"
                    />

                    <div className="imge flex gap-5  xl2:-ml-36 xl2:mt-8  lg:mt-8 md:mt-8  s:mt-8  s:ml-6">
                      <img
                        src={SRectangle}
                        alt=""
                        className=" xl2:w-[10%] xl2:h-[10%] xl2:ml-56 lg:ml-28 md:ml-20  lg:w-[15%] lg:h-[10%] md:w-[15%] md:h-[10%] s:w-[15%] s:h-[10%] "
                      />
                      <img
                        src={Imagenot}
                        alt=""
                        className=" xl2:w-[10%] xl2:h-[10%] lg:w-[15%] lg:h-[10%] bg-gray-200 md:w-[15%] md:h-[10%] s:w-[15%] s:h-[10%]"
                      />
                    </div>
                    <div>
                      <div class=" xl2:w-[423px] xl2:h-[84px] m-2 md:-ml-6 m:-ml-8 s:-ml-5">
                        <span class="break-words s:text-sm md:text-base">
                        I hope this message finds you well. I am writing to kindly request your assistance in submitting three images as part of our ongoing project.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column-3 s:mt-8 md:mt-0  ">
                  <div className="form xl2:-ml-16">
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
                      <label>Date</label><br />
                      <input
                        type="date"
                        name=""
                        id=""
                        className="bg-gray-200"
                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
