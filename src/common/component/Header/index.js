import React, { useState } from 'react'


export const Header = () => {
    const [hide, setHide] = useState(false)
    return (
        <>
        <div className="lg:w-full h-12 bg-red flex justify-between lg:items-center sm:w-full md:w-full sm:items-center">
            <div className="flex lg:ml-36 pl-12  md:ml-10">
                <div className="text-2xl text-white font-bold"><span>Propnex</span></div>
                <div id="city_effect" onMouseEnter={()=>setHide(true)} className="text-lg text-white ml-12 pt-1 font-light"> <span >City</span> <i id="down" class="fa fa-caret-down text-white"></i>  <i id="up" class="fa fa-caret-up text-white hidden"></i></div>
            </div>
            <div className="flex lg:mr-28 mr-5 pr-12  ">
                <div id="login_effect" className="lg:mr-8 mr-4 pt-2 text-white font-light"> <span>Login</span> <i id="l_down" class="fa fa-caret-down text-white"></i> <i id="l_up" class="fa fa-caret-up text-white hidden"></i></div>
                <div className="h-8 w-44 bg-white rounded-full pl-3 lg:pt-1 ring-offset-2 ring-2 ring-yellow"><span>Post Property </span> <span className="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full p-1 mt-2">FREE</span></div>
            </div>

        </div>
        </>
    )
}
