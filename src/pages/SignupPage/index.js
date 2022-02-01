import React from 'react';
import { Header } from '../../common/component/Header';
import { SubHeader } from '../../common/component/SubHeader';

const Signup = () => {
  return(
      <> 
      <Header/>
        <div className="flex">
        <div className="bg-[url('signupbgimage.jpeg')] bg-cover h-screen w-1/3 bg-center ">
          
          </div>
          <div className="bg-[url('signupbg2.jpeg')] bg-cover h-screen w-full bg-center items-center flex justify-center" >
          <div className="w-96 h-[36rem] shadow-2xl mt-24 rounded-xl bg-white">
            <div className="pl-6">
            <div className="text-xl mt-4">
              <span>Sign Up</span>
            </div>

            <div className="mt-4">
              <label>I am</label>
            </div>

            <div className=" mt-2">
              <input type="radio" name="flexRadioDefault" value="1"/>
                <label class="p-radios" for="name">Buyer/Owner </label>
               <input type="radio" name="flexRadioDefault" value="2"/>
                 <label class="p-radios" for="name"> Agent</label>
               <input type="radio" name="flexRadioDefault" value="3"/>
                 <label class="p-radios" for="name">Builder </label>
             </div>

             <div className="mt-4 " >
                <div className="mt-6 ">
                 <input type="text"  placeholder="Name" id="name" value=""/>
                </div>
              <div className="mt-6">
                   <input type="text"  placeholder="Email" id="email" value=""/>
               </div>
               <div className="mt-6">
                    <input type="text"  placeholder="Username" id="username" value=""/>
                </div>
                 <div className="mt-6" >
                   <input type="password"  placeholder="Password" id="password" value=""/>
                 </div>
                 <div className="mt-6">
                     <input type="text" name="phone" placeholder="Mobile Number"   value=""/>
                 </div>
                
                 <div className="mt-6"><label><input type="checkbox" checked=""/> I agree to PropNex T&amp;C, Privacy Policy, &amp; Cookie Policy</label><br/><br/></div>

             </div>
              <div className="h-10 w-72 bg-onclick text-white rounded-full ml-4 text-center text-xl pt-1">
                 <span>Sign Up</span>
              </div>
                 
                 <div className="ml-6 pl-6 mt-4">Already registered? <a class="p-loginbtn1" href="#">Login Now</a></div>
            </div>
          </div>
          </div>
         
        </div>
      </>
  );
};


export default Signup;
