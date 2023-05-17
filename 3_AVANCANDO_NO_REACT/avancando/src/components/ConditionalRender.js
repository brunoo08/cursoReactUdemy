import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("bRUNO")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h1>iF TERNARIO</h1>
            {name === "João" ? (
                <div>O nome é joão</div>
            ) : (
                <div>O nome não é joão</div>
            )}

            <button onClick={() => setName("João")}>Clica aqui</button>
        </div>
    )
}

export default ConditionalRender