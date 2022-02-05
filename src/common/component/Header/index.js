import React, { useState } from "react";
import { SubHeader } from "../SubHeader";
import { BuyBox } from "../SubHeader/components/BuyBox";
import { HelpBox } from "../SubHeader/components/HelpBox";
import { HoamloanBox } from "../SubHeader/components/HoamloanBox";
import { PropertyServicesBox } from "../SubHeader/components/PropertyServicesBox";
import { RentBox } from "../SubHeader/components/RentBox";
import { ResourceBox } from "../SubHeader/components/ResourceBox";
import { SellBox } from "../SubHeader/components/SellBox";
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




  return (
    <>
      <div className="lg:w-full  h-12 bg-red pr-10 lg:pr-0 flex justify-between lg:items-center sm:w-full md:w-full sm:items-center  z-20 ">
        <div className="flex lg:ml-36 pl-12  md:ml-10 pt-3 pr-6 lg:pr-0 float-left  ">
          <div className="text-2xl text-white font-bold  ">
            <span>Propnex</span>
          </div>
          <div
            onMouseEnter={() => setCtyhide(true)}
            onMouseLeave={() => setCtyhide(false)}
            className={`text-lg  text-white   mr-8 lg:ml-12 pt-1 font-light lg:h-12 lg:w-28 h-10 w-14 items-center ${ ctyhide ? "bg-white text-red border-b-white" : "" } pl-2 lg:pl-10 rounded cursor-pointer`} >
            
            <span>City</span>
            {ctyhide == false ? (<i class="fa fa-caret-down text-white ml-2"></i>) : (<i class="fa fa-caret-up text-red ml-2 ctyhide==true "></i>)}
          </div>
        </div>
        <div className="flex lg:mr-28 mr-8 pr-12 items-center  ">
          <div
            onMouseEnter={() => setLgnhide(true)}
            onMouseLeave={() => setLgnhide(false)}
            className={`h-12 w-20 lg:mr-8 mr-6 pt-2 text-white ${
              lgnhide ? "bg-white text-red border-l-2 border-l-lightgrey" : ""
            } font-light text-center rounded cursor-pointer `}
          >   
            <span>Login</span>
            {lgnhide == false ? (<i class="fa fa-caret-down text-white ml-2"></i>) : (<i class="fa fa-caret-up text-red ml-2 "></i>)}
          </div>
          <div className="lg:h-8 h-4 w-22 lg:w-44 bg-white rounded-full pl-3 lg:pt-1 ring-offset-2 ring-2 ring-yellow">
            <span>Post Property </span>
            <span className="lg:text-xs text-sm ml-3 font-medium h-3 w-5  bg-yellow rounded-full p-1 mt-2">
              FREE
            </span>
          </div>
        </div>
      </div>
      {lgnhide &&
        <div className="w-72 h-[26rem] bg-white float-right  mr-36 pr-16 z-20"> 
       <LoginBox lgnhide={lgnhide} setLgnhide={setLgnhide} />
       </div>
         }
      {ctyhide && <CityBox ctyhide={ctyhide} setCtyhide={setCtyhide} />}
     
    </>
  );
};
