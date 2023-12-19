import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import Small1 from "./Images/Small1.png";

export default function PreviousProduct() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="main flex">
        <div className="block lg:hidden absolute z-50 ml-5 mt-3">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <i className="fas fa-bars fa-xl"></i>
          </button>
        </div>
        <div
          className={`sidebar s:absolute lg:relative top-0 left-0 ${
            showSidebar ? "block" : "hidden"
          } lg:block s:w-[50%] s:h-[100%] md:w-[25%] md:h-[100vh]  z-40  s:bg-blue-200 lg:bg-white h-screen s:break-words lg:w-[20%] xl2:w-[17%]`}
        >
          <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
            <li className="flex items-center gap-x-2 hover:text-white  hover:bg-[#235688] hover:p-2 ">
              <img src={profile} alt="" className="w-7" />
              Profile
            </li>
            <li className="flex items-center gap-x-2 hover:text-white hover:bg-[#235688] hover:p-2 ">
              <img src={notificationVendor} alt="" className="w-7" />
              Notification
            </li>
            <li className="flex items-center gap-x-2 hover:text-white hover:bg-[#235688] hover:p-2 ">
              <img src={product} alt="" className="w-7" />
              Product
            </li>
            <div className="space-y-3 lg:hidden">
              <li className="flex items-center gap-x-2 text-sm s:-ml-2 hover:text-white hover:bg-[#235688] hover:p-1 ">
                <i className="fa-hand-point-left fa-solid" />
                Previous Product
              </li>
              <li className="flex items-center gap-x-2 s:-ml-2  text-sm hover:text-white hover:bg-[#235688] hover:p-1 ">
                <i class="fa-solid fa-cart-plus"></i>
                Add New Product
              </li>
              <li className="flex items-center gap-x-2 text-sm s:-ml-2 hover:text-white hover:bg-[#235688] hover:p-1 ">
                <i class="fa-solid fa-face-smile"></i>
                Review & Ratings
              </li>
            </div>

            <li className="flex items-center gap-x-2 break-words  xl2:mt-[600px] lg:mt-[500px] md:mt-[180px] sm:mt-[180px] s:mt-[150px] hover:bg-[#235688] hover:p-2 hover:w-36">
              <i className="">&larr; LogOut</i>
            </li>
          </ul>
        </div>

        <div className="content h-full s:w-[100%] lg:w-[80%] xl2:w-[83%]">
          <div className="navbar md:w-[100%] s:h-14 md:h-20 bg-white flex justify-end items items-center gap-x-5">
            <img className="md:w-6 md:h-auto s:w-6 s:h-auto md:block  " src={profile} alt="" />
            <span className=" md:block s:text-1xl md:text-sm">
              Dhanajay Raj
            </span>
            <div className="bg-gray-400 md:w-8 md:h-8 s:w-6 s:h-6 rounded-full mr-14 md:block">
              <span className="ml-3 font-bold s:text-1 xl md:text-sm s:ml-2 md:ml-3">
                ?
              </span>
            </div>
          </div>

          <div className="middle-content bg-gray-100 w-full min-h-[100vh]  xl2:p-[30px] lg:p-[20px] md:p-[20px] s:p-[20px] m:p-[20px] sm:p-[20px] md:h-[50%]">
            <div className="inner-content bg-white min-h-[100vh] flex overflow-hidden">
              <div className="left-content p-1  border-r-2 border-solid border-gray-100 hidden lg:block ">
                <p className="mt-20  lg:text-sm xl2:text-[16px] hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                  Previous Product
                </p>
                <p className="mt-5 lg:text-sm xl2:text-[16px] hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                  Add New Product
                </p>
                <p className="mt-5 lg:text-sm xl2:text-[16px] hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                  Review And Rating
                </p>
              </div>

              <div className="right-content">
                <p className="text-[#152C5B] font-semibold xl2:text-xl md:text-xl sm:text-base s:text-sm m:text-[13px] mt-3 md:ml-4 lg:ml-5 xl2:ml-10 s:ml-8 m:ml-5 sm:ml-3 ">
                  Previous Product
                </p>
                <div className="flex xl2:space-x-8 md:space-x-6  xl2:ml-64 lg:ml-44  md:ml-44    mt-6  m:ml-4 sm:ml-3 ">
                  <p className="xl2:text-lg lg:text-base md:text-lg sm:text-sm s:text-[9px] text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Product List
                  </p>
                  <p className="xl2:text-lg lg:text-base md:text-lg sm:text-sm s:text-[9px] text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Deleted
                  </p>
                  <p className="xl2:text-lg lg:text-base md:text-lg sm:text-sm s:text-[9px] text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    In Stock
                  </p>
                  <p className="xl2:text-lg lg:text-base md:text-lg sm:text-sm s:text-[9px] text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Out Of Stock
                  </p>
                </div>

                <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />

                <div className="flex  md:justify-evenly  s:justify-evenly md:m-5 sm:m-2  s:m-2 sm:text-[12px] md:text-base lg:text-lg s:text-[9px] m:text-[11px] s:-ml-5 md:ml-0">
                  <p>Product Name</p>
                  <p>Status</p>
                  <p>Date</p>
                  <p>Action</p>
                </div>

                <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />

                <div className="container">
                  <div>
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>

                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-7 s:ml-6 m:ml-9">
                        {" "}
                        <p className="bg-green-100 text-green-600 xl2:w-20 lg:w-16  p-1  xl2:text-[16px] md:text-[16px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                          InStock
                        </p>
                      </li>
                      <li className="xl2:pl-24 lg:pl-16 md:pl-11 sm:pl-4 s:ml-6 m:ml-6 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                    <hr className=" border-b-2 xl2:w-[66.5vw] lg:w-[66vw] s:w-[100vw]" />
                    <ul className="flex sm:m-5 s:ml-1 m-2">
                      <li className="xl2:pl-0 lg:pl-0 s:pl-0 sm:pl-0">
                        <input type="checkbox" />
                      </li>
                      <li className="xl2:pl-8 lg:pl-3 md:pl-5 sm:pl-1">
                        <img
                          src={Small1}
                          alt=""
                          className="xl2:w-[40px] lg:w-[25px] md:w-[30px] sm:w-[13px] s:w-[12px]  h-auto"
                        />
                      </li>
                      <li className="xl2:pl-8 lg:pl-7 md:pl-8 sm:pl-2 xl2:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px] ">
                        Product Name
                      </li>
                      <li className="xl2:pl-24 lg:pl-4  md:pl-14 sm:ml-5 s:ml-4 m:ml-5">
                        {" "}
                        <p className="bg-pink-200 text-orange-600 xl2:w-28 md:w-28  p-1  xl2:text-[14px] md:text-[14px] sm:text-[10px] s:text-[8px] m:text-[10px]">
                        Out Of Stock
                        </p>
                      </li>
                      <li className="xl2:pl-20 lg:pl-11 md:pl-6 sm:pl-3 s:ml-3 m:ml-3 xl2:text-[16px] md:text-[16px] sm:text-[11px] s:text-[8px] m:text-[10px]">
                        10/09/2022
                      </li>
                      <ul className="flex xl2:pl-16 lg:pl-8 md:pl-9 sm:pl-0 s:ml-2 m:ml-2 xl2:text-[16px] md:text-[14px] lg:text-[15px] sm:text-[9px] s:text-[8px] m:text-[10px]">
                        <li>
                          <button className="flex text-white bg-green-500  xl2:py-2 xl2:px-2  lg:py-1 lg:px-1  md:py-1 md:px-2">
                            <i className="fal fa-edit"></i>Edit
                          </button>
                        </li>
                        <li className="xl2:pl-5 lg:pl-3 md:pl-3 sm:pl-1  s:pl-1">
                          <button className="flex text-red-600 bg-pink-200 hover:bg-red-600  hover:text-white xl2:py-2 xl2:px-2  lg:py-1 lg:px-1 md:py-1 md:px-2">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
