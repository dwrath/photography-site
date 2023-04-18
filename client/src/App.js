import './css/resets.css';
import './css/layout.css';
import './css/styles.css';
import Navbar from "./Components/Navbar";
import HeroScene from "./Components/HeroScene";


function App() {
  return (
    <div className="page-wrapper">
      <Navbar/>
        <HeroScene/>
    </div>
  );
}

export default App;
