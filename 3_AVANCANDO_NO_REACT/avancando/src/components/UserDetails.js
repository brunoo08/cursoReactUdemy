const UserDetails = ({name, age, driverLicense}) => {

  return (
    <div>
        <h2>Detalhes da pessoa: </h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Possui carteira de motorista?: {driverLicense ? "Sim" : "Não"}</li>
        </ul>
        {(age >= 18 && !driverLicense) ? (
            <h3>Essa pessoa pode tirar carteira de habilitação</h3>
        ) : (
            <h3>Essa pessoa não pode tirar carteira de habilitação, ou já possui</h3>
        ) }
    </div>
  )
}

export default UserDetails