import React from 'react';
import { Header } from '../../common/component/Header';
import AdvicesTools from './components/AdvicesToolspage';
import CommercialProperty from './components/CommercialProperty';
import PostpropertyButton from './components/PostPropertyButton';
import PropertyBox from './components/PropertyBox';
import PublicProperty from './components/PublicProperty';

const HomePage = () => {
  return( 
         <>
            <Header/>
            <PropertyBox/>
            <CommercialProperty/>
            <PublicProperty/>
            <AdvicesTools/>
            <PostpropertyButton/>

         </>
  );
};

export default HomePage;
