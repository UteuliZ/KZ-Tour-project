import './App.css';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Schedule from "./pages/Schedule/Schedule";
function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
  );
}

export default App;