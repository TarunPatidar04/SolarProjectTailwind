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
          <div className=" ">
            <table class="table-fixed border-collapse border border-slate-400 border-spacing-14 min-w-full">
              <caption class="caption-top">
                <tr className="border border-slate-300 ">

                  <th className="px-6 py-3 text-left">
                    <button class="bg-blue-500 hover:bg-white  hover:text-blue-900 text-white font-bold py-1 px-3">
                      Active
                    </button>
                  </th>

                  <th className="px-6 py-3 text-left">
                    <button class="bg-blue-500 hover:bg-white  hover:text-blue-900 text-white font-bold py-1 px-3">
                      Request
                    </button>
                  </th>

                  <th className="px-6 py-3 text-left"> 
                    <button class="bg-blue-500 hover:bg-white  hover:text-blue-900 text-white font-bold py-1 px-3">
                      Reject
                    </button>
                  </th>

                </tr>
              </caption>

              <thead>
                <tr className="border border-slate-300 ">
                  <th className="px-6 py-3 text-left"> Company </th>
                  <th className="px-6 py-3 text-left">Shop Name</th>
                  <th className="px-6 py-3 text-left">Rating</th>
                  <th className="px-6 py-3 text-left">Contractor ID</th>
                  <th className="px-6 py-3 text-left">E-mail ID</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border border-slate-300">
                  <td className="px-6 py-4">
                    <img src={companylogo} alt="" className="max-w-[50px]" />
                  </td>
                  <td className="px-6 py-4">Shanti Electricals System</td>
                  <td className="px-6 py-4">4.5</td>
                  <td className="px-6 py-4">RFTPCTR933</td>
                  <td className="px-6 py-4">shantitechno@yahoo.com</td>
                  <td className="px-6 py-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ">
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
};
export default Vendorlist;
