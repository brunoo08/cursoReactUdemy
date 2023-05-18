import styles from './CarDetails.module.css'

const CarDetails = ({marca, cor, ano, km}) => {
  return (
    <div>
        <h3 className={styles.meuTitulo}>Detalhes do veículo:</h3>
        <ul>
            <li className={styles.minhaLista}>Marca: {marca}</li>
            <li className={styles.minhaLista}>Cor: {cor}</li>
            <li className={styles.minhaLista}>Ano: {ano}</li>
            <li className={styles.minhaLista}>Km: {km}</li>
        </ul>
    </div>
  )
}

export default CarDetails