import './css/resets.css';
import './css/layout.css';
import './css/styles.css';
import Navbar from "./Components/Navbar";
import HeroScene from "./Components/HeroScene";
import Carousel from "./Components/Featured";
import Services from './Components/Services';


function App() {
  return (
    <div className="page-wrapper">
      <Navbar/>
        <HeroScene/>
        <Carousel/>
      <Services/>
    </div>
  );
}

export default App;
