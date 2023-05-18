import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react"

function App() {
  const n = 15
  const [name] = useState("Bruno");
  const redTitle = false;

  return (
    <div className="App">
      {/**css global */}
      <h1>React com CSS</h1>
      {/**css de componente */}
      <MyComponent />
      <p>Este paragrafo é do app.js</p>
      {/**INLINE CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/**CSS INLINE DINAMICO */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"} }>CSS DINAMICO</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"} }>CSS DINAMICO</h2>
      <h2 style={name === "Bruno" ? {color: "green", backgroundColor: "#000"} : null }>CSS DINAMICO</h2>
      {/**classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este tirulo vai ter classe dinamica</h2>
    </div>
  );
}

export default App;
