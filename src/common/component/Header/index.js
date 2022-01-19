import React, { useState } from "react";
import { SubHeader } from "../SubHeader";
import { CityBox } from "./components/CityBox";
import { LoginBox } from "./components/LoginBox";

export const Header = () => {
  const [ctyhide, setCtyhide] = useState(false);
  const [lgnhide, setLgnhide] = useState(false);
  const [sellhide, setSellhide] = useState(false);
  const [buyhide, setBuyhide] = useState(false);
  const [renthide, setRenthide] = useState(false);
  const [hoamloanhide, setHoamloanhide] = useState(false);
  const [propertyserviceshide, setPropertyServiceshide] = useState(false);
  const [resourcehide, setResourcehide] = useState(false);
  const [helphide, setHelphide] = useState(false);




  const bgwhite = " bg-white";
  return (
    <>
      <div className="lg:w-full h-12 bg-red flex justify-between lg:items-center sm:w-full md:w-full sm:items-center">
        <div className="flex lg:ml-36 pl-12  md:ml-10 pt-3  ">
          <div className="text-2xl text-white font-bold ">
            <span>Propnex</span>
          </div>
          <div
            onMouseEnter={() => setCtyhide(true)}
            onMouseLeave={() => setCtyhide(false)}
            className={`text-lg  text-white   ml-8 lg:ml-12 pt-1 font-light lg:h-12 lg:w-28 h-10 w-14 items-center ${
              ctyhide ? "bg-white text-red" : ""
            } pl-2 lg:pl-10 rounded`}
          >
            {" "}
            <span>City</span>{" "}
            {ctyhide == false ? (
              <i class="fa fa-caret-down text-white"></i>
            ) : (
              <i class="fa fa-caret-up text-red ctyhide==true "></i>
            )}
          </div>
        </div>
        <div className="flex lg:mr-28 mr-5 pr-12 items-center ">
          <div
            onMouseEnter={() => setLgnhide(true)}
            onMouseLeave={() => setLgnhide(false)}
            className={`h-12 w-20 lg:mr-8 mr-4 pt-2 text-white ${
              lgnhide ? "bg-white text-red border-l-2 border-l-lightgrey" : ""
            } font-light text-center rounded `}
          >
            {" "}
            <span>Login</span>{" "}
            {lgnhide == false ? (
              <i class="fa fa-caret-down text-white"></i>
            ) : (
              <i class="fa fa-caret-up text-red "></i>
            )}
          </div>
          <div className="h-8 w-44 bg-white rounded-full pl-3 lg:pt-1 ring-offset-2 ring-2 ring-yellow">
            <span>Post Property </span>{" "}
            <span className="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full p-1 mt-2">
              FREE
            </span>
          </div>
        </div>
      </div>
       {/* <div className="w-72 h-96 bg-white float-right mr-16 pr-16 "> */}
       {lgnhide && <LoginBox lgnhide={lgnhide} setLgnhide={setLgnhide} />}
      {/* </div> */}
      {ctyhide && <CityBox ctyhide={ctyhide} setCtyhide={setCtyhide} />}
      <SubHeader
        sellhide={sellhide}
        setSellhide={setSellhide}
        buyhide={buyhide}
        setBuyhide={setBuyhide}
        renthide={renthide}
        setRenthide={setRenthide}
        hoamloanhide={hoamloanhide}
        setHoamloanhide={setHoamloanhide}
        propertyserviceshide={propertyserviceshide}
        setPropertyServiceshide={setPropertyServiceshide}
        resourcehide={resourcehide}
        setResourcehide={setResourcehide}
        helphide={helphide}
        setHelphide={setHelphide}
      />

     

      
    </>
  );
};
