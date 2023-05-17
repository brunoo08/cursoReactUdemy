import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
