//1 - CONFIG REACT ROUTER
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Produtos from './pages/Produtos'

//components
import Navbar from './components/Navbar';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* //2 - links com react router */}
      <Navbar/>
      {/* 9 - search */}
      <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Produtos/>}/>
          {/* 6 - NESTED ROUTE */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* 9- search */}
          <Route path='/search' element={<Search/>}/>
          {/* 10 - REDIRECT */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/* 7 - NO MATCH ROUTE */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
