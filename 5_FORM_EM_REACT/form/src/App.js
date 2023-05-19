import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Nicolas", email: "nicolas@email.com", bio: "Eu sou o melhor!", role:"admin"}}/>
    </div>
  );
}

export default App;
