import './css/resets.css';
import './css/layout.css';
import './css/styles.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";



function App() {
    return (
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/form" element={<Form/>}/>
       </Routes>
    );
}

export default App;
