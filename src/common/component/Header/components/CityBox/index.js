import React from 'react'
import { NearByCities } from './components/NearByCities'
import { OtherCities } from './components/OtherCities'
import { PopularCities } from './components/PopularCities'

export const CityBox = ({ctyhide,setCtyhide}) => {
    return (
       <>
        <div  onMouseEnter={()=>setCtyhide(true)} onMouseLeave={()=>setCtyhide(false)}    className="lg:h-[36rem] h-60 lg:w-[52rem] w-[30rem]  bg-white shadow-2xl lg:ml-36 ml-0 rounded-2xl flex justify-between z-20 fixed">
          <div>
          <div className="ml-10 lg:text-2xl text-sm lg:mt-6 mt-2">
          <i class='fas fa-map-marker-alt lg:text-xl text-sm text-red'></i>  <span className="font-light">INDIA</span>
          </div>
             <NearByCities/>
         
           
          <div className="ml-10  mt-4">
            <span className="">Popular Cities</span>
          </div>
          <PopularCities/>
          <PopularCities/>
          <PopularCities/>
          <PopularCities/>

         


          <div className="ml-10  mt-4">
            <span className="">Other Cities</span>
          </div>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>
           <OtherCities/>

          </div>

          
          <div className="border-l-2 border-x-bordergrey p-10 font-semibold">
          <div> <i class="fa fa-globe text-red text-xl"></i>  <span>INTERNATIONAL</span> </div>
          <div className="flex mt-8 mr-3"> <img src="usaflag.png" alt="boohoo" className="h-5 w-7 mr-2 " /> <span className="font-light">NRI HOME</span> </div>
          <div className="flex mt-2 mr-3"> <img src="uae.png" alt="boohoo" className="h-5 w-7 mr-2 " /> <span className="font-light">US</span> </div>
          <div className="flex mt-2 mr-3"> <img src="uae.png" alt="boohoo" className="h-5 w-7 mr-2 " /> <span className="font-light">UAE</span> </div>
          <div className="flex mt-2 mr-3"> <img src="canada.png" alt="boohoo" className="h-5 w-7 mr-2 " /> <span className="font-light">Canada</span> </div>
          <div className="flex mt-2 mr-3"> <img src="australia.png" alt="boohoo" className="h-5 w-7 mr-2 " /> <span className="font-light">Australia</span> </div>
          <div className="flex mt-2 mr-3"> <img src="singapore.png" alt="boohoo" className="h-5 w-7 mr-2 mt-2" /> <span className="font-light">Singapore</span> </div>
          </div>
        </div>
       </>
    )
}
