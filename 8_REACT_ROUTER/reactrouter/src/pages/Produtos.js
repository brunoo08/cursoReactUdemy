import { useParams } from "react-router-dom" 
import {useFetch} from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const Produtos = () => {
    const { id } = useParams();

    const url = 'http://localhost:3000/products/'+ id

    const {data: product, loading, error} = useFetch(url)

    return (
        <>
        <p>Id do produto: {id}</p>
        {error && <p>ocorreu um erro!</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R${product.price}</p>
                {/* 6 - NESTED ROUTE */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
        </>
    )
}

export default Produtos