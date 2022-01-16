import React from 'react'

export const CityBox = () => {
    return (
       <>
        <div className="h-[32rem] w-[48rem] bg-white shadow-2xl ml-40 rounded-2xl flex justify-between">
          <div>
              <span>india</span>
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
