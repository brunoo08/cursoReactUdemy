import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  //const name = "neymar";
  const [userName] = useState("Maria")
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*imagens em public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/*imagens em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName}/>
      <CarDetails brand="VW" km={35000} color="Preto"/>
    </div>
  );
}

export default App;
