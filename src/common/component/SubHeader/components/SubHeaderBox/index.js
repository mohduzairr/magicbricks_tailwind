import React from 'react';

const SubHeaderBox = ({setSellhide,sellhide,buyhide,setBuyhide,renthide,setRenthide,hoamloanhide,setHoamloanhide,propertyserviceshide,setPropertyServiceshide,setResourcehide,resourcehide,setHelphide,helphide}) => {
  return (
      <>
         <div className="h-14 w-full border-b-2 border-bordergrey shadow-2xl bg-white flex justify-evenly items-center font-light  fixed">
            <div onMouseEnter={()=>setBuyhide(true)} onMouseLeave={()=>setBuyhide(false)} className={`${ buyhide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-20  text-center pt-4 cursor-pointer`}><span className="lg:text-base text-sm">Buy</span>  { buyhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>
            <div onMouseEnter={()=>setRenthide(true)} onMouseLeave={()=>setRenthide(false)} className={`${ renthide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-20  text-center pt-4 cursor-pointer`} ><span>Rent</span> { renthide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>
            <div onMouseEnter={()=>setSellhide(true)} onMouseLeave={()=>setSellhide(false)} className={`${ sellhide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-20  text-center pt-4 cursor-pointer`} ><span>Sell</span> { sellhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }   </div>
            <div onMouseEnter={()=>setHoamloanhide(true)} onMouseLeave={()=>setHoamloanhide(false)} className={`${ hoamloanhide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-24  text-center pt-4 cursor-pointer`}><span className="lg:text-base text-xs">Hoamloan</span> { hoamloanhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }  </div>
            <div onMouseEnter={()=>setPropertyServiceshide(true)} onMouseLeave={()=>setPropertyServiceshide(false)} className={`${ propertyserviceshide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-36  text-center pt-4 cursor-pointer`}>   <span className="lg:text-base text-xs">Property Services</span> { propertyserviceshide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> } </div>
            <div onMouseEnter={()=>setResourcehide(true)} onMouseLeave={()=>setResourcehide(false)} className={`${ resourcehide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-24  text-center pt-4 cursor-pointer`}><span className="lg:text-base text-xs">Resources</span> { resourcehide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> } </div>
            <div onMouseEnter={()=>setHelphide(true)} onMouseLeave={()=>setHelphide(false)} className={`${ helphide ? "bg-white text-red border-2 border-bordergrey  rounded-lg mt-2 " : "" } h-14 w-24  text-center pt-4 cursor-pointer`}><span>Help</span> { helphide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>

         </div>
      </>
  );
};

export default SubHeaderBox;
