import './App.css';
import { Routes, Route } from 'react-router-dom';

import Context from './Context/Context';
import ShowText from './showText/ShowText';
import Home from './pages/Home/Home';
import NavLinkMenu from './pages/NavLink/NavLink';
import ShowPictures from './pages/ShowPictures/ShowPictures';

function App() {
  return (
    <>
     <Context>
      <NavLinkMenu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/show" element={<ShowText />} /> 
        <Route path='/pictures' element={<ShowPictures/>}/>
        </Routes>
   </Context>
  </>
  );
}

export default App;
