import React from "react";

export default function RooftopCalc() {
  return (
    <div>
      <div className="content ml-24 mt-10  ">
        <div>
          <h1 className="font-bold text-3xl">Solar Rooftop calculator</h1>
        </div>

        <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900 mt-8 "/>

        <div>
          <p className="mt-5">
            Average solar irradiation in MADHYA PRADESH state is 1266.52 W /
            sq.m
          </p>
        </div>

        <div>
          <p className="mt-4 break-words">
            1kWp solar rooftop plant will generate on an average over the year
            5.0 kWh of electricity per day (considering 5.5 <br /> sunshine
            hours)
          </p>
        </div>

        <div className=" Maincontainer flex flex-row  mt-5 rounded w-[100%]    ">

            <div className=" container1 bg-gray-300  w-[70%]   rounded ">
              <div className="font-bold flex mt-8">
                <span className="ml-5">1.</span>{" "}
                <div className="ml-5">Size of Power Plant</div>
              </div>
              <p className="ml-12">Feasible Plant size as per your Budget :</p>

              <div className="font-bold flex mt-5">
                <span className="ml-5">2.</span>{" "}
                <div className="ml-5">Cost of the Plant :</div>
              </div>
              <p className="ml-12">
                MNRE current Benchmark Cost{" "}
                <span className="text-lightgrayy"> (without GST)</span> :
              </p>
              <p className="ml-12 mt-3">
                Without subsidy{" "}
                <span className="text-lightgrayy">
                  {" "}
                  (Based on current MNRE benchmark without GST)
                </span>
                :{" "}
              </p>
              <p className="ml-12 mt-8">
                With subsidy 0{" "}
                <span className="text-lightgrayy">
                  {" "}
                  (Based on current MNRE benchmark without GST){" "}
                </span>{" "}
                :
              </p>

              <div className="font-bold flex mt-4">
                <span className="ml-5">3.</span>{" "}
                <div className="ml-5 ">
                  Total Electricity Generation from Solar Plant :
                </div>
              </div>
              <p className="ml-12 mt-3">Annual :</p>
              <p className="ml-12 mt-3">Life-Time (25 years):</p>

              <div className="font-bold flex mt-3">
                <span className="ml-5">4.</span>{" "}
                <div className="ml-5">Life-Time (25 years):</div>
              </div>

              <div className="font-bold flex">
                <span className="ml-5">a.</span>{" "}
                <div className="ml-5 ">
                  Tariff @ Rs.8/ kWh (for top slab of traffic) - No increase
                  assumed over 25 years :
                </div>
              </div>
              <p className="ml-12 mt-3">Monthly :</p>
              <p className="ml-12 mt-3">Annual :</p>
              <p className="ml-12 mt-3 mb-10">Life-Time (25 years):</p>
            </div>
        

       
            <div className="container2 bg-lightgrayyy   w-[20%]  ">
            
            
              <p className="ml-12 mt-10">7kw</p>

              <p className="ml-12 mt-11">
              Rs. 40991 Rs. / kw
              
              </p>
              <p className="ml-12 mt-6">
              Rs. 600991 
                <div className="text-lightgrayy">
                  (near to your budget)
                </div>
               
              </p>
              <p className="ml-12 mt-8">
              Rs. 100991 
                <span className="text-lightgrayy">
                 
                </span>{" "}
               
              </p>

              <p className="ml-12 mt-10">9000kwh</p>
              <p className="ml-12 mt-3">22500kwh</p>

             
              <p className="ml-12 mt-20">Rs. 900991 </p>
              <p className="ml-12 mt-3">Rs. 700991 </p>
              <p className="ml-12 mt-3">Rs. 9880991 </p>
            </div>
       


        </div>


      </div>
    </div>
  );
}
