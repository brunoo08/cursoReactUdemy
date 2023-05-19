import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
  //6 - CONTROLLED INPUTS
  console.log(user)
  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value)
  }

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ENVIANDO FORM");
    console.log(name);
    console.log(email);

    // AULA 7 - LIMPAR FORMULARIO
    setName("");
    setEmail("");
  }

  return (
    <div>
        {/**5 - envio de formulario */}
        {/**1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"  onChange={handleName} value={name}/>
            </div>
            {/**label envolvendo input */}
            <label>
              <span>E-mail</span>
              {/**simplificaçaõ de manipulação */}
              <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm