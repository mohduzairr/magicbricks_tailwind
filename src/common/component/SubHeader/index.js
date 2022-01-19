import React from 'react'

export const SubHeader = ({setSellhide,sellhide,buyhide,setBuyhide,renthide,setRenthide,hoamloanhide,setHoamloanhide,propertyserviceshide,setPropertyServiceshide,setResourcehide,resourcehide,setHelphide,helphide}) => {
    return (
       <>
         <div className="h-14 w-full border-b-2 border-bordergrey shadow-2xl bg-white flex justify-evenly items-center font-light fixed">
            <div onMouseEnter={()=>setBuyhide(true)} onMouseLeave={()=>setBuyhide(false)}><span>Buy</span>  { buyhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>
            <div onMouseEnter={()=>setRenthide(true)} onMouseLeave={()=>setRenthide(false)}><span>Rent</span> { renthide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>
            <div onMouseEnter={()=>setSellhide(true)} onMouseLeave={()=>setSellhide(false)}  ><span>Sell</span> { sellhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }   </div>
            <div onMouseEnter={()=>setHoamloanhide(true)} onMouseLeave={()=>setHoamloanhide(false)}><span>Hoamloan</span> { hoamloanhide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }  </div>
            <div onMouseEnter={()=>setPropertyServiceshide(true)} onMouseLeave={()=>setPropertyServiceshide(false)}>   <span>Property Services</span> { propertyserviceshide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> } </div>
            <div onMouseEnter={()=>setResourcehide(true)} onMouseLeave={()=>setResourcehide(false)}><span>Resources</span> { resourcehide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> } </div>
            <div onMouseEnter={()=>setHelphide(true)} onMouseLeave={()=>setHelphide(false)}><span>Help</span> { helphide==false ? <i  class="fa fa-caret-down text-red"></i> : <i  class="fa fa-caret-up text-red ctyhide==true "></i> }</div>

         </div>
       </>
    )
}
