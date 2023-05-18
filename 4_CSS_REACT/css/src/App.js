import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/**css global */}
      <h1>React com CSS</h1>
      {/**css de componente */}
      <MyComponent />
      <p>Este paragrafo é do app.js</p>
    </div>
  );
}

export default App;
