import Nav from "../src/Components/Nav";
import Home from "../src/Components/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </>
  );
}

export default App;
