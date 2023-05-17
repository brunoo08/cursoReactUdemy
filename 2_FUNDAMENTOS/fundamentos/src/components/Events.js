const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }
        else{
            return <h1>Renderizando isso tambem</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick= {() => console.log("CLICOU")}>clique aqui tb</button>
                <button onClick={() => {
                    if(true){
                        console.log("ISSO NAO DEVERIA ESTAR AQUI")
                    }
                }}>Clique aqui, please</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;