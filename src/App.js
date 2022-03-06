import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Locations from './components/Locations/Locations';
import { AnimatePresence } from 'framer-motion';

import {ReactComponent as Facebook} from './assets/icons/facebook.svg'


function App() {
  window.scrollTo({top: 0})
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/locations' element={<Locations />}></Route>      
        </Routes> 
      </AnimatePresence>      
    </div>
  );
}

export default App;
