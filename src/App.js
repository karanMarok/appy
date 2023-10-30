import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Price from './components/Price';
import Questions from './components/Questions';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import {
//   Routes, Route
// } from 'react-router-dom';
// import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
{/*       
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About />}></Route>
      </Routes>

       */}
      <Features/>
      <Testimonials/>
      <Price/>
      <Questions/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
