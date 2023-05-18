import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, marca: "ferrari", cor: "vermelha", ano: 2023, km: 0},
    {id: 2, marca: "mercedes", cor: "prata", ano: 2018, km: 25000},
    {id: 3, marca: "fiat", cor: "azul", ano: 1989, km: 150000},
    {id: 4, marca: "VW", cor: "preto", ano: 2006, km: 69000}
  ]

  return (
    <div className="App">
      <h3>Meus carros disponiveis:</h3>
      {cars.map((car)=> (
        <CarDetails key={car.id} marca={car.marca} cor={car.cor} ano={car.ano} km={car.km}/>
        ))}
    </div>
  );
}

export default App;
