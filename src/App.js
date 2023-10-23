import './App.css';
import './style.css'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/footer/Footer';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import Resume from './components/Pages/Resume';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
     <Header/>
      <Routes>      
          <Route path='/livemyportfolio' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          {/* <Route path="/experience" element={<Experience/>} />      */}
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
