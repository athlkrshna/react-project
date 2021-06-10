import React from 'react';
import WelcomeSection from '../../welcome';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';


function Home() {
  return (
    <>
      <div id="home" ><WelcomeSection {...homeObjOne}/> </div>
      <div id="abt" ><WelcomeSection {...homeObjTwo}/> </div>
      <div id="tech" ><WelcomeSection {...homeObjThree}/> </div>
      <div id="vision" ><WelcomeSection {...homeObjFour}/> </div>
      
    </>
  );
}

export default Home;