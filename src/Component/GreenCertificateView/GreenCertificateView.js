import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import GreenCerti from "./Images/GreenCerti.png";

export default function GreenCertificate() {
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
        } md:block lg:w-[15%] md:w-[17%] s:w-[40%] s:h-[90%] md:h-[100vh] m-2 z-40 s:bg-gray-100 md:bg-white`}
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
          <li className="">
            <p>&larr; Logout</p>
          </li>
        </ul>
      </div>

      <div className="content w-full lg:w-[85%] md:w-[83%] s:w-[100%]  h-[100vh] relative z-0">
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

            <span className=" md:ml-10 s:ml-10 md:mr-5 md:mt-2 s:mt-2 font-semibold text-red-500">
              Logout
            </span>
          </div>
        </div>

        <div className="bg-gray-400 p-3 ">
          <div className="bg-white ">
            <div className="flex justify-start  ">
              <button
                type="button"
                class="text-white bg-bt  hover:bg-bt  focus:outline-none    font-medium  text-sm p-8 text-center inline-flex items-center mr-2 "
              >
                <span className="text-red-400 md:text-2xl  font-bold s:text-sm">
                  &larr;
                </span>
              </button>
              <div className="md:p-10 md:ml-20 s:p-5 s:-ml-2 4 text-bluue md:font-bold s:font-semibold md:text-[16px] s:text-[14px]">
                Green Certificate
              </div>
            </div>

            <div className="m-6  flex  justify-center mt-0 xl2:text-[16px] lg:text-[14px] md:text-[13px] s:text-[8px] m:text-[10px]">
              <button class="bg-blue-300 text-left hover:bg-white mr-2 hover:text-bluee text-white font-bold py-1 px-3">
                Approved
              </button>

              <button class="bg-blue-300 hover:bg-white mr-2  hover:text-bluee text-white font-bold py-1 px-3">
                Request
              </button>

              <button class="bg-blue-300 hover:bg-white  hover:text-bluee text-white font-bold py-1 px-3">
                Reject
              </button>
            </div>

            <table class="lg:w-[100%] md:w-[100%] s:w-[100%] divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th className="lg:px-6  py-3 text-left md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-500 ">
                    Houes Owner Name
                  </th>
                  <th className="lg:px-6   py-3 text-left md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-500 ">
                    Mobile No.
                  </th>

                  <th className="lg:px-6 py-3 text-left md:text-xs font-medium sm:text-[10px] s:text-[9px]  text-gray-500 ">
                    Register Address
                  </th>
                  <th className="lg:px-6  py-3 text-left md:text-xs font-medium sm:text-[10px] s:text-[9px] text-gray-500 ">
                    E-mail ID
                  </th>
                  <th className="lg:px-6  py-3 text-left md:text-xs font-medium sm:text-[10px] s:text-[9px] text-gray-500 ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="md:text-xs sm:text-[10px] s:text-[9px] font-medium text-gray-900">
                          Dhanajay Raj
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 py-4 whitespace-pre-wrap md:text-xs sm:text-[10px] s:text-[9px]  text-gray-500">
                    96498526595
                  </td>
                  <td className="lg:px-6 py-4 ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px] text-gray-900 whitespace-pre-wrap">
                      76, Janki Nagar Ext, Near Talent School
                    </div>
                  </td>
                  <td className="lg:px-6 py-4  break-words ">
                    <div className="md:text-xs sm:text-[10px] s:text-[9px]  text-gray-900 ">
                      shanti@yahoo.com
                    </div>
                  </td>
                  <td className="lg:px-6 py-4 whitespace-nowrap  md:text-xs sm:text-[10px] s:text-[9px] font-medium">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m:py-2 m:px-4 s:py-1 s:px-2 ">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
