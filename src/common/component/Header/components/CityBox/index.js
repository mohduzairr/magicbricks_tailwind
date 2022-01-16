import React from 'react'

export const CityBox = ({ctyhide,setCtyhide}) => {
    return (
       <>
        <div  onMouseEnter={()=>setCtyhide(true)} onMouseLeave={()=>setCtyhide(false)}    className="h-[32rem] w-[48rem] bg-white shadow-2xl ml-40 rounded-2xl flex justify-between">
          <div>
          <div className="ml-10 text-2xl mt-6">
          <i class='fas fa-map-marker-alt text-xl text-red'></i>  <span className="font-light">INDIA</span>
          </div>
             
          <div className="ml-10  mt-4">
            <span className="">Nearby Cities</span>
          </div>

          <div className="flex justify-evenly pl-6 mt-2">
          <div className="text-sm font-light">
            <span>Gurgon</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Greater Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Gaziabad</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
         
          </div>
           
          <div className="ml-10  mt-4">
            <span className="">Popular Cities</span>
          </div>
          <div className="flex justify-evenly pl-10 mt-2">
          <div className="text-sm font-light">
            <span>Gurgon</span>
          </div>
          
          <div className="ml-10 text-sm font-light">
            <span>Greater Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Gaziabad</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
         
          </div>

          <div className="flex justify-evenly pl-10 mt-2">
          <div className="text-sm font-light">
            <span>Gurgon</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Greater Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Gaziabad</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
         
          </div>

          <div className="flex justify-evenly pl-10 mt-2">
          <div className="text-sm font-light">
            <span>Gurgon</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Greater Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Gaziabad</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
         
          </div>

          <div className="flex justify-evenly pl-10 mt-2">
          <div className="text-sm font-light">
            <span>Gurgon</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Greater Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Gaziabad</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
          <div className="ml-10 text-sm font-light">
            <span>Noida</span>
          </div>
         
          </div>


          </div>

          
          <div className="border-l-2 border-lightgrey p-10 font-semibold">
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
