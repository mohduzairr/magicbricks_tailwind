import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../../../../../pages/HomePage';
import Signup from '../../../../../pages/SignupPage';


const Routes = () => {
  return (
   <>
   
   <Router>
                <Switch>
                <Route path="/" exact>
                <HomePage/>
              </Route>
                     
                    <Route path="/signup" exact>
                        <Signup/>
                    </Route>
                   
                    
          
                    
                </Switch>
               
     </Router>
   

   </>
  );
};


export default Routes;
