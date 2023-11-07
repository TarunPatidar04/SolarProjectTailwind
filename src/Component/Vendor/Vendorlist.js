import React from "react";
import styles from "./Vendorlist.module.css";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import help from "./Images/help.png";
import companylogo from "./Images/campany.png";

const Vendorlist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.options}>
          <div className={styles.option}>
            <img src={profile} alt="Profile" className={styles.optionIcon} />
            Profile
          </div>
          <div className={styles.option}>
            <img
              src={notificationVendor}
              alt="Notifications"
              className={styles.optionIcon}
            />
            Notifications
          </div>
          <div className={styles.option}>
            <img src={product} alt="Products" className={styles.optionIcon} />
            Products
          </div>
          <div className={styles.option}>
            <img
              src={userEng}
              alt="User Engagement"
              className={styles.optionIcon}
            />
            User Engagement
          </div>
        </div>
        <div className={styles.welcomeText}></div>
        <div className={styles.logoutSection}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.navbar}>
          <img src={profile} alt="Profile" className={styles.profile} />
          profile Picture
          <img src={help} alt="help" className={styles.help} />
        </div>

        <div className={styles.grayBackground}>
          <div className="m-12  ">
            <div className="m-6  flex  justify-center">
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

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex font-bold   min-w-full whitespace-nowrap  text-bluee max-w-lg  ">
              <li className="pl-5 px-12 py-4">Company</li>
              <li className="pl-5  px-24 py-4">Shop Name</li>
              <li className="pl-10  px-12 py-4">Rating</li>
              <li className="pl-8  px-8 py-4">Contractor ID</li>
              <li className="pl-16 px-52 py-4">E-mail ID</li>
              <li className="pl-9  px-6 py-4">Action</li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>


            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <ul className="flex min-w-full  overflow-hidden list-inside">
              <li className="pl-5 px-6 py-4">
                <img src={companylogo} alt="" className="max-w-[50px]" />
              </li>
              <li className="pl-20 px-6 py-4   whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px]">
                Shanti Electricals System
              </li>
              <li className="pl-20 px-6 py-4">4.5</li>
              <li className="pl-20 px-6 py-4 text-iid">RFTPCTR933</li>
              <li className="pl-20 px-6 py-4">shantitechno@yahoo.com</li>
              <li className="pl-20 px-6 py-4">
                <button className="bg-bluee hover:bg-bluee text-white font-bold py-1 px-3">
                  View
                </button>
              </li>
            </ul>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vendorlist;
