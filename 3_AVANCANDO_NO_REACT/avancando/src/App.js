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
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "neymar";
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "Mercedes", color: "Amarelo", newCar: false, km: 1000},
    {id: 3, brand: "BMW", color: "Preto", newCar: true, km: 0}
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  } 

  const users = [
    {id: 1, name: "Bruno", age: 26, driverLicense: true},
    {id: 2, name: "Nicolas", age: 12, driverLicense: false},
    {id: 3, name: "Geice", age: 30, driverLicense: false},
    {id: 4, name: "Nei", age: 56, driverLicense: true}
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
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/**fragments */}
      <Fragments propFragment="teste"/>
      {/**children props */}
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      {/**PASSAR FUNÇÃO EM PROP */}
      <ExecuteFunction myFunction={showMessage} />
      {/**state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/**desafio da seção */}
      {users.map((user)=> (
        <UserDetails key={user.id} name={user.name} age={user.age} driverLicense={user.driverLicense}/>
      ))}
    </div>
  );
}

export default App;
