import React from 'react'

export const Header = () => {
    return (
        <>
        <div className="w-full h-12 bg-red flex justify-between items-center">
            <div className="flex ml-36 pl-12 ">
                <div className="text-2xl text-white font-bold"><span>Propnex</span></div>
                <div className="text-lg text-white ml-12"> <span>City</span></div>
            </div>
            <div className="flex mr-28 pr-12  ">
                <div className="mr-8"> <span>Login</span></div>
                <div className="h-8 w-44 bg-white rounded-full pl-3 pt-1"><span>Post Property </span> <span className="text-xs ml-3 font-medium h-3 w-5  bg-yellow rounded-full">FREE</span></div>
            </div>

        </div>
        </>
    )
}
