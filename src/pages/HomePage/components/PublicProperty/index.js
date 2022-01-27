import React from 'react';

const PublicProperty = () => {
  return (
      <>
       <div className="text-4xl font-light lg:ml-6 ml-10 mt-10 mb-10">
           <span> <span className="border-b-4 border-b-skyblue">we've</span> got properties for everyone</span>
       </div>    

        <div className=" p-4 flex:none  lg:flex justify-around ml-16 lg:ml-0 ">
        <div className="relative mr-4 " >
         <img src="image5.jpg" alt="BigCo Inc. logo" className=" h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold bottom-10  text-white"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        <div className="relative mr-4 mt-4 lg:mt-0">
         <img src="image6.jpg" alt="BigCo Inc. logo" className=" h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4 font-semibold absolute text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>

        <div className="relative mr-4 mt-4 lg:mt-0">
         <img src="image7.jpg" alt="BigCo Inc. logo" className=" h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        <div className="relative mr-4 mt-4 lg:mt-0">
         <img src="image8.jpeg" alt="BigCo Inc. logo" className=" h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl"/>
          <div className="mt-2 left-8 font-semibold text-lg text-white absolute bottom-24"><span>Hoam Loan</span></div>
         <div className="ml-4 left-4  absolute font-semibold text-white  bottom-10"><span>View & compare your best offers <br/>and apply online</span></div>
        </div>
        
        </div>
      </>
  );
};

export default PublicProperty;
