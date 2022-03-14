import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Locations from './pages/Locations/Locations';
import { AnimatePresence } from 'framer-motion';

function App() {
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
