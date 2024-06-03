import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Kuchuk from './pages/Kuchuk';
import Mushuk from './pages/Mushuk';
import Qoy from './pages/Qoy';
import Odam from './pages/Odam';
import Mol from './pages/Mol';
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiSheep } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { MdEmojiPeople } from "react-icons/md";


function App() {

  
  return (
    <div className="App">
       <main>
          <ul>
            <li><NavLink to="/Kuchuk"><FaDog /></NavLink></li>
            <li><NavLink to="/Mushuk"><FaCat /></NavLink></li>
            <li><NavLink to="/Qoy"><GiSheep /></NavLink></li>
            <li><NavLink to="/Mol"><SiHappycow /></NavLink></li>
            <li><NavLink to="/Odam"><MdEmojiPeople /></NavLink></li>
          </ul>
       </main>

          <Routes>
            <Route path='/Kuchuk' element={<Kuchuk />}/>
            <Route path='/Mol' element={<Mol />}/>
            <Route path='/Mushuk' element={<Mushuk />}/>
            <Route path='/Qoy' element={<Qoy />}/>
            <Route path='/Odam' element={<Odam />}/>
          </Routes>
    </div>

  );
}

export default App;
