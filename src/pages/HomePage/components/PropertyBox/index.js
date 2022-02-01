import React from 'react';

const PropertyBox = () => {
  return (
        <>
        <div className="mt-40 text-4xl ml-10  font-light "><span><span className="border-b-4 border-b-yellow">Pro</span>perty Services</span></div>
        <div className=" flex-none lg:flex mt-6 justify-around ml-14 lg:ml-0 px-4 py-4  ">
            <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl shadow-2xl lg:mr-4 ">
                <img src="image1.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
                <div className="mt-2 ml-4 font-semibold text-lg"><span>Hoam Loan</span></div>
                <div className="ml-4 font-thin  "><span>View & compare your best offers and apply online</span></div>
            </div>
            <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl  mr-4  shadow-2xl mt-4 lg:mt-0">
                <img src="image2.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
                <div className="mt-2 ml-4 font-semibold text-lg"><span>Pay Rent</span></div>
                <div className="ml-4 font-thin  "><span>Pay your rent using Credit Card & earn rewards</span></div>

            </div>
            <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl mr-4   shadow-2xl mt-4 lg:mt-0">
                <img src="image3.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
                <div className="mt-2 ml-4 font-semibold text-lg"><span>Legal Services</span></div>
                <div className="ml-4 font-thin  "><span>Get expert legal help for all property-related matters</span></div>

            </div>
            <div className="h-56 w-80 border-2 border-bordergrey rounded-2xl   shadow-2xl mt-4 lg:mt-0">
                <img src="image4.jpg" alt="BigCo Inc. logo" className="rounded-t-2xl"/>
                <div className="mt-2 ml-4 font-semibold text-lg"><span>Vastu</span></div>
                <div className="ml-4 font-thin  "><span>Consult the best Vastu Experts for your home or office</span></div>

            </div>
        </div>
        
        </>
  );
};

export default PropertyBox;
