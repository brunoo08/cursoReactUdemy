const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
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
        </div>
    )
}

export default Events;