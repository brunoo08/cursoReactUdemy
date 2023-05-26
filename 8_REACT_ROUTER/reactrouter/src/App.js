//1 - CONFIG REACT ROUTER
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Produtos from './pages/Produtos'

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* //2 - links com react router */}
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Produtos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
