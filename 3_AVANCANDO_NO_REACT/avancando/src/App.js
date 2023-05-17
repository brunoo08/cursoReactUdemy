import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {
  //const name = "neymar";
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "Mercedes", color: "Amarelo", newCar: false, km: 1000},
    {id: 3, brand: "BMW", color: "Preto", newCar: true, km: 0}
  ]
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
      <CarDetails brand="VW" km={35000} color="Preto" newCar={false}/>
      {/*Reaproveitando */}
      <CarDetails brand="Ford" km={35000} color="vermelho" newCar={true}/>
      <CarDetails brand="fIAT" km={35000} color="AZUL" newCar={false}/>
      {/**LOOP EM ARRAY DE OBJETOS */}
      {cars.map((car)=> (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/**fragments */}
      <Fragments propFragment="teste"/>
      {/**children props */}
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
    </div>
  );
}

export default App;
