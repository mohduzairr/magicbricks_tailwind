import React from "react";

export const LoginBox = ({ lgnhide, setLgnhide }) => {
  return (
    <>
      <div
        onMouseEnter={() => setLgnhide(true)}
        onMouseLeave={() => setLgnhide(false)}
        className=" h-96 w-60 bg-white shadow-2xl float-right rounded-2xl  mr-20 pt-5"
      >
          <ul className="pl-7 text-sm">
              <li className="font-light">My Activity</li>
              <li className="mt-4 font-semibold">Contacted Properties</li>
              <li className="mt-4 font-semibold">Viewed Properties</li>
              <li className="mt-4 font-semibold">Shortlisted Properties</li>
              <li className="mt-4 font-semibold"> Searches</li>

          </ul>
          <div className="mt-6 border-t-2 border-t-lightgrey border-b-lightgrey border-b-2  pl-7 pt-5 pb-5">
              <div className="font-semibold"><span>Recommendations</span></div>
             
              <div className="mt-4 font-semibold"><span>My Profile</span></div>
          </div>
          <button className="text-center h-10 w-32 mt-4 ml-4 bg-lightred ">Login</button>
      
      </div>
    </>
  );
};
