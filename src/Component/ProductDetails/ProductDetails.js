import React from "react";
import styles from "./Product.module.css";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import help from "./Images/help.png";
import mono from "./Images/mono.png";
import star from "./Images/star.png";

const ProductDetails = () => {
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

          <div className="Details">

            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                   src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                     alt=""
                    className=""
                  />
                </div>
             <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>
          




            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                   src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                     alt=""
                    className=""
                  />
                </div>
             <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>
          



            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                   src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                     alt=""
                    className=""
                  />
                </div>
             <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>
            </div>
          




            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19">
              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                   src={mono}
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
                <span className="font-bold">₹29,900</span>
                <span className="text-[13px]">(GST inclusive price)</span>
                </div>
              </div>

              <div class="text-center shadow-lg rounded">
                <div class="overflow-hidden">
                  <img
                    src={mono}
                     alt=""
                    className=""
                  />
                </div>
             <div className="text-left m-3">
                <p class="py-2 font-bold text-[20px] ">Monocrystalline Solar Panels (Mono-SI)</p>
                <p class="py-2 text-[13px] ">Find the right products that fits your budget and needs.</p>
                <img  src={star} alt="" className="max-w-[100px] "/>
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
};
export default ProductDetails;
