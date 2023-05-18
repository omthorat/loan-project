import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Meanu from './components/Meanu';
import Search from './components/Search';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navagationbar from './components/Navagationbar';
import Ratelock from './components/Ratelock';
import Waivers from './components/Waivers';
import Tablematerial from './components/Tablematerial';

function App() {
 
  return (
    <>
     
     <Meanu/>
    
    <Router>
    <Navagationbar/>
    <Routes>
    <Route path="/" element={<><h1 className='text-dark allloan'>All Loans</h1><Search/><Tablematerial/>  </>}/>
    <Route path="/Ratelock" element={<Ratelock/> }/>
    <Route path="/Waivers" element={<Waivers/>}/>

    </Routes>
         </Router>
    
    </>
  );
}

export default App;
