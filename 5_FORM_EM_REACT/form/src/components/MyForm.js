import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name);
  console.log(email);
  return (
    <div>
        {/**1 - Criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"  onChange={handleName}/>
            </div>
            {/**label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm