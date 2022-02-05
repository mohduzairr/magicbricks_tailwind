import React from 'react';
import { Header } from '../../common/component/Header';
import { SubHeader } from '../../common/component/SubHeader';
import SubHeaderBox from '../../common/component/SubHeader/components/SubHeaderBox';

const LoginPage = () => {
  return(
      <> 
      <Header/>
      <SubHeader/>
        <div className="flex">
        <div className="bg-[url('signupbgimage.jpeg')] bg-cover h-screen w-1/3 bg-center ">
          
          </div>
          <div className="bg-[url('signupbg2.jpeg')] bg-cover h-screen w-full bg-center items-center flex justify-center" >
          <div className="w-96 h-[26rem] shadow-2xl  rounded-xl bg-white">
            <div className="pl-6">
            <div className="text-xl mt-4">
              <span>LogIn</span>
            </div>

          

          

             <div className="mt-4 " >
               
              <div className="mt-6">
                   <input type="text"  placeholder="Email"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"/>
               </div>
               
                 <div className="mt-6" >
                   <input type="password"  placeholder="Password"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"/>
                 </div>
                
                

             </div>
              <div className="h-10 mt-12 w-72 bg-onclick text-white rounded-full ml-4 text-center text-xl pt-1 focus:ring-2 ring-2 ring-yellow ring-offset-4">
                 <span>Log In</span>
              </div>
                 <div className="float-right pr-14 mt-4 "> <span class="p-loginbtn1"  className="text-lightgrey">Need Help ?</span></div>

                 <div className=" flex justify-center mt-16 border-b-2 pb-3 mr-4 border-b-bordergrey">
                     <div className="text-lightgrey absolute bg-white">Or login using</div>
                 </div>
                 <div className="flex justify-center mt-8 mr-2">
                        <img src="facebook.jpeg" alt="BigCo Inc. logo" class="rounded-full h-8 w-8 mr-2 mb-2 "/><span className="text-blue font-light mt-1 text-sm">Facebook</span>
                        <span class="  ml-2 font-light mr-2 mb-2 text-lightgrey">|</span>
                        <img src="google.png" alt="BigCo Inc. logo" class="rounded-full h-8 w-8 "></img><span className="text-blue font-light mt-1 ml-2 text-sm">Google</span>
                 </div>
                 
            </div>
            <div className="w-96 h-32 bg-darkgrey flex justify-center items-center ">
              <div>
                  <span className="text-sm">New to Magicbricks?</span> <span className="text-sm text-lightred">Sign Up</span>
              </div>
        </div> 
          </div>
         
          </div>
        
        </div>
      </>
  );
};


export default LoginPage;
