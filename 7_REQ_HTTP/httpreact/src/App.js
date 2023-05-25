import './App.css';

import {useState, useEffect} from "react";

//4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  //4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1 - RESGATANDO DADOS
  // useEffect(() => {
  //   async function fetchData(){
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // //2 - ADIÇÃO PRODUTOS
  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }
    //   const res = await fetch(url, {
    //     method: "POST",
    //     headers:{
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(product)
    //   });

    //   //3 - carregamento dinamico
    //   const addedProduct = await res.json()
      
    //   setProducts((prevProducts) => [...prevProducts, addedProduct]);
    //5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
    
  }

  //7 - desafio 6
  const handleDelete =(id)=>{
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      {/* //6 - loading */}
      {loading && <h3>Carregando produtos...</h3>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R${product.price} 
          <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
          
        ))}
      </ul>}
      

      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
