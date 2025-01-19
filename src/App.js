import './App.css';
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Nav from "./components/Nav"
import Products from './records/Products';

function App() {
  return (
   <>
   <div className='header_stciky'>
        <header>
        <MdAccountCircle className='header_icons'/>
        <h3>Feet Treat</h3>
        <IoMdNotifications className='header_icons'/>
        </header>

    <Nav />
    </div>
    <Products />
    
   </>
  );
}

export default App;
