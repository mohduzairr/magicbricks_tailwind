import React from 'react';

export const HoamloanBox = ({setHoamloanhide}) => {
  return (
      <>
          <div onMouseEnter={()=>setHoamloanhide(true)} onMouseLeave={()=>setHoamloanhide(false)} className="lg:h-72 shadow-4xl border-t-white border-2 rounded-2xl border-bordergrey lg:w-[48rem] bg-white mt-14 ml-72 flex justify-around fixed ">
           <div className="mt-6 ">
               <span className="text-lg border-b-2 p-2 border-y-bordergrey">Popular Choisec</span> 
               <div className="mt-6 font-light"><span> Ready To Move</span></div>
               <div className="mt-2 font-light"><span>Owner Property</span></div>
               <div className="mt-2 font-light"><span>Budget Home</span></div>
               <div className="mt-2 font-light"><span>Premium Homes</span></div>

           </div>
           <div className="mt-6">
             <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Property Types</span>
              <div className="mt-6 font-light"><span> Flat in New-Delhi</span></div>
               <div className="mt-2 font-light"><span>House/Villa in New-Delhi</span></div>
               <div className="mt-2 font-light"><span>Plot in New-Delhi</span></div>
               <div className="mt-2 font-light"><span>Office space in New-Delhi</span></div>
               <div className="mt-2 font-light"><span>Commercial Shop in New-Delhi</span></div>

           </div>
           <div className="mt-6">
           <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Budget </span>
              <div className="mt-6 font-light"><span> Under ₹ 50 Lac</span></div>
               <div className="mt-2 font-light"><span>₹ 50 Lac - ₹ 1 Cr</span></div>
               <div className="mt-2 font-light"><span>₹ 1 Cr - ₹ 1.5 Cr</span></div>
               <div className="mt-2 font-light"><span>Above ₹ 1.5 Cr</span></div>
          </div>
          <div className="mt-6">
          <span className="text-lg  border-b-2 p-2 border-y-bordergrey">Explore</span>
              <div className="mt-6 font-light"><span> Builders</span></div>
               <div className="mt-2 font-light"><span>Localities</span></div>
               <div className="mt-2 font-light"><span>Projects</span></div>
               <div className="mt-2 font-light"><span>Investment Hotspot</span></div>
               <div className="mt-2 font-light"><span>Find an Agent</span></div>

          </div>
          
          
        </div>
      </>
  );
};
