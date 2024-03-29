import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/login';
import Register from './pages/Register/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
