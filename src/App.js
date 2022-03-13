import './App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Locations from './pages/Locations/Locations';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from './helpers/hooks';


function App() {
  const [screenSize, setScreenSize] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 768px)')

  
  function getScreenSize() {
    if(isMobile) return "mobile";
    else if(isTablet) return "tablet";
    else return "desktop"
  } 

  function handleLoad() {
    setScreenSize(()=> getScreenSize());
    setIsLoaded(true);
  }

  useEffect(()=>{
    if(isLoaded) setScreenSize( getScreenSize()); 
  })


  return (
    <div onLoad={handleLoad} className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>       
          <Route path='/' element={<Home screen={screenSize} />}></Route>
          <Route path='/about' element={<About screen={screenSize} />}></Route>      
          <Route path='/careers' element={<Careers screen={screenSize} />}></Route>
          <Route path='/locations' element={<Locations screen={screenSize} />}></Route>      //TODO clean up the code
        </Routes> 
      </AnimatePresence>      
    </div>
  );
}

export default App;
