import React from 'react';

const AdvicesTools = () => {
  return(
      <>
        <div className= "text-4xl font-light ml-10 lg:ml-6 mt-10  mb-10"><span><span className="border-b-4 border-b-skyblue">Adv</span>ice & Tools</span></div>
        <div className=" flex:none lg:flex justify-around ml-4 mr-4  ">
            <div className="h-56 w-80 border-2 border-bordergrey ml-6 lg:ml-2 mb-8  pl-4  mr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-transparentred duration-300 shadow-2xl">
                <div className="text-4xl font-bold text-onclick mt-4"><i class="fa fa-line-chart"></i></div>
                <div className="mt-4 font-light font-serif text-2xl "><span>Rates & Trends</span></div>
                <div className="mt-2 pr-4 "><span>Know all about Property Rates & Trends in your city.</span></div>
                <div className=" pt-2 text-onclick"><span>Read more</span><i class='fas fa-arrow-right text-2xl ml-2 '></i></div>
            </div>

            <div className="h-56 w-80 border-2 border-bordergrey  mb-8 pl-4 mt-1 ml-6 lg:ml-2 lg:mt-0   mr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-transparentred duration-300 shadow-2xl">
                <div className="text-4xl font-bold text-onclick mt-4"> <i class='fas fa-hand-holding-usd'></i></div>
                <div className="mt-4 font-light font-serif text-2xl "><span>Investment Hotspot</span></div>
                <div className="mt-2 pr-4 "><span>Discover the top laocalities in your city for investment.</span></div>
                <div className=" pt-2 text-onclick"><span>Read more</span><i class='fas fa-arrow-right text-2xl ml-2 '></i></div>
            </div>

            <div className="h-56 w-80 border-2 border-bordergrey  mb-8 pl-4 ml-6 lg:ml-2  mr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-transparentred duration-300 shadow-2xl">
                <div className="text-4xl font-bold text-onclick mt-4"><i class='fas fa-wallet'></i></div>
                <div className="mt-4 font-light font-serif text-2xl "><span>Research insights</span></div>
                <div className="mt-2 pr-4 "><span>Get experts insights and research report on real state. </span></div>
                <div className=" pt-2 text-onclick"><span>Read more</span><i class='fas fa-arrow-right text-2xl ml-2 '></i></div>
            </div>

            <div className="h-56 w-80 border-2 border-bordergrey ml-6 lg:ml-2 mb-8 pl-4  mr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-transparentred duration-300 shadow-2xl">
                <div className="text-4xl font-bold text-onclick mt-4"><i class="fa fa-calculator"></i></div>
                <div className="mt-4 font-light font-serif text-2xl "><span>EMI Calculator</span></div>
                <div className="mt-2 pr-4 "><span>Know how much you'll have to pay every month on your loan.</span></div>
                <div className=" pt-2 text-onclick"><span>Read more</span><i class='fas fa-arrow-right text-2xl ml-2 '></i></div>
            </div>
        </div>
      </>
  )
   
};

export default AdvicesTools;
