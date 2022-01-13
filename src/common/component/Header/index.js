import React from 'react'

export const Header = () => {
    return (
        <>
        <div className="w-full h-12 bg-red flex justify-between items-center">
            <div className="flex ml-36 pl-12 ">
                <div className="text-2xl text-white font-bold"><span>Propnex</span></div>
                <div className="text-lg text-white ml-12 pt-1 font-light"> <span>City</span> <i class="fa fa-caret-down text-lightred"></i></div>
            </div>
            <div className="flex mr-28 pr-12  ">
                <div className="mr-8 pt-2 text-white font-light"> <span>Login</span> <i class="fa fa-caret-down text-lightred"></i></div>
                <div className="h-8 w-44 bg-white rounded-full pl-3 pt-1"><span>Post Property </span> <span className="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full">FREE</span></div>
            </div>

        </div>
        </>
    )
}
