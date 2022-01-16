import React, { useState } from 'react'
import { CityBox } from './components/CityBox'


export const Header = () => {
    const [ctyhide, setCtyhide] = useState(false)   
    const [lgnhide, setLgnhide] = useState(false)


    return (
        <>
        <div className="lg:w-full h-12 bg-red flex justify-between lg:items-center sm:w-full md:w-full sm:items-center">
            <div className="flex lg:ml-36 pl-12  md:ml-10 pt-3">
                <div className="text-2xl text-white font-bold"><span>Propnex</span></div>
                <div onMouseEnter={()=>setCtyhide(true)} onMouseLeave={()=>setCtyhide(false)} className="text-lg text-white hover:text-red ml-12 pt-1 font-light h-12 w-28 items-center hover:bg-white pl-10 rounded"> <span >City</span> { ctyhide==false ? <i  class="fa fa-caret-down text-lightred"></i> : <i  class="fa fa-caret-up text-white ctyhide==true "></i> }</div>
            </div>
            <div className="flex lg:mr-28 mr-5 pr-12  ">
                <div  onMouseEnter={()=>setLgnhide(true)} onMouseLeave={()=>setLgnhide(false)} className="lg:mr-8 mr-4 pt-2 text-white font-light"> <span>Login</span> { lgnhide==false ? <i  class="fa fa-caret-down text-white"></i> : <i  class="fa fa-caret-up text-white "></i>}</div>
                <div className="h-8 w-44 bg-white rounded-full pl-3 lg:pt-1 ring-offset-2 ring-2 ring-yellow"><span>Post Property </span> <span className="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full p-1 mt-2">FREE</span></div>
            </div>

        </div>
      { ctyhide==true &&  <CityBox/>}
        </>
    )
}
