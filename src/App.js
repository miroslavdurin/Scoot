import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Locations from './components/Locations/Locations';

import {ReactComponent as Facebook} from './assets/icons/facebook.svg'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/locations' element={<Locations />}></Route>      
      </Routes> 
    </div>
  );
}

export default App;
