import React, { useState } from "react";
import profile from "./Images/profile.png";
import product from "./Images/product.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import companylogo from "./Images/campany.png";

export default function Vendorlist() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="main flex -p-3">
      <div className="block lg:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>

      <div
        className={`sidebar s:absolute md:absolute lg:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } lg:block xl2:w-[10%] lg:w-[15%] md:w-[20%] s:w-[40%] s:h-[70%] md:h-[100vh] m-2 z-40 s:bg-gray-100 md:bg-white`}
      >
        <ul className="flex flex-col md:gap-y-5 s:gap-y-4  pt-28 pl-6 s:-mr-2  md:mr-4">
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex   md:text-base s:text-sm font-semibold lg:text-[15px]">
            <img
              src={profile}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Profile
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold lg:text-[15px]">
            <img
              src={notificationVendor}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Notification
          </li>
          <li className=" items-center gap-x-2 s:text-sm s:-ml-3 font-semibold md:-mb-2 md:flex lg:text-[15px]">
            <img
              src={product}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Product
          </li>
          <li className=" items-center gap-x-2 break-words s:text-sm s:-ml-3 font-semibold md:flex lg:text-[15px]">
            <img
              src={userEng}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Engagement
          </li>
        </ul>
      </div>

      <div className="content w-full xl2:w-[90%] lg:w-[85%] md:w-[100%] s:w-[100%]  h-[100vh] relative z-0">
        <div className=" md:p-10 s:p-8 md:-mt-5 s:-mt-5">
          <div className="flex items-center   justify-end gap-x-2  md:-mb-5 s:-mb-10  s:text-sm  ">
            <img
              src={profile}
              alt=""
              className="w-7  mt-2 s:w-4 s:opacity-50 md:opacity-100"
            />
            <span className="md:mt-2  s:mt-2 md:ml-0  font-semibold ">
              profile
            </span>

            <span className=" md:ml-10 s:ml-10 md:mr-5 md:mt-2 s:mt-2 font-semibold">
              Logout
            </span>
          </div>
        </div>

        <div className="bg-gray-400 md:p-8 s:p-2 min-h-full ">
          <div className="bg-white md:-mb-14  md:-mt-14 s:-mb-20  s:-mt-3 ">
            <div className="md:m-14 md:pt-4  s:m-4 s:pt-4 ">
              <div className="m-6  flex  justify-center mt-6 xl2:text-[16px] lg:text-[14px] md:text-[13px] s:text-[8px] m:text-[10px]">
                <button class="bg-blue-300 text-left hover:bg-white mr-2 hover:text-bluee text-white font-bold py-1 px-3">
                  Active
                </button>

                <button class="bg-blue-300 hover:bg-white mr-2  hover:text-bluee text-white font-bold py-1 px-3">
                  Request
                </button>

                <button class="bg-blue-300 hover:bg-white  hover:text-bluee text-white font-bold py-1 px-3">
                  Reject
                </button>
              </div>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900 " />

              <ul className="flex font-bold   min-w-full whitespace-nowrap   text-bluee max-w-lg xl2:pt-10 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px] ">
              <li className="xl2:pl-2 xl2:px-12 xl2:py-4 lg:pl-2 lg:px-0 lg:py-4 md:pl-2 md:px-0 md:py-4 s:pl-0 s:px-0 s:py-4 sm:pl-0 sm:px-0 sm:py-4">Company</li>
              <li className="xl2:pl-10  xl2:px-24 xl2:py-4 lg:pl-9  lg:px-0 lg:py-4 md:pl-6  md:px-0 md:py-4 s:pl-2  s:px-0 s:py-4 sm:pl-4  sm:px-0 sm:py-4">Shop Name</li>
              <li className="xl2:pl-24  xl2:px-12 xl2:py-4 lg:pl-16  lg:px-0 lg:py-4 md:pl-10  md:px-0 md:py-4 s:pl-1  s:px-0 s:py-4 sm:pl-4  sm:px-0 sm:py-4">Rating</li>
              <li className="xl2:pl-7  xl2:px-8 xl2:py-4 lg:pl-8  lg:px-0 lg:py-4 md:pl-5  md:px-0 md:py-4 s:pl-1  s:px-0 s:py-4 sm:pl-2  sm:px-0 sm:py-4">Contractor ID</li>
              <li className="xl2:pl-14 xl2:px-52 xl2:py-4 lg:pl-11 lg:px-0 lg:py-4 md:pl-9 md:px-0 md:py-4 s:pl-1 s:px-0 s:py-4 sm:pl-4 sm:px-0 sm:py-4">E-mail ID</li>
              <li className="xl2:pl-8  xl2:px-6 xl2:py-4 lg:pl-24  lg:px-0 lg:py-4 md:pl-16  md:px-0 md:py-4 s:pl-5  s:px-0 s:py-4 sm:pl-8  sm:px-0 sm:py-4">Action</li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

              <ul className="flex min-w-full  overflow-hidden list-inside xl2:justify-between lg:justify-between md:justify-between s:justify-between xl2:p-2 lg:p-2 md:p-2 s:p-2 xl2:text-[16px] lg:text-[13px] md:text-[13px] s:text-[7px] m:text-[9px]">
                <li className="">
                  <img src={companylogo} alt="" className="xl2:max-w-[70px]  lg:max-w-[50px] md:max-w-[50px] s:max-w-[20px] m:max-w-[30px]" />
                </li>
                <li className="   lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                  Shanti Electricals System
                </li>
                <li className="">4.5</li>
                <li className=" text-iid">RFTPCTR933</li>
                <li className=" lg:whitespace-nowrap lg:text-ellipsis lg:overflow-hidden  xl2:max-w-[300px] lg:max-w-[100px] md:whitespace-nowrap md:text-ellipsis md:overflow-hidden md:max-w-[80px] s:whitespace-nowrap s:text-ellipsis s:overflow-hidden s:max-w-[50px]">
                shantitechno@yahoo.com</li>
                <li className="">
                  <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3 ">
                    View
                  </button>
                </li>
              </ul>

              <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />


              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
