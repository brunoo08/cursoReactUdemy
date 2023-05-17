const Challenge = () => {
    
        const A = 2;
        const B = 5;
        
    return (

        <div>
            <p>O valor A: {A}</p> 
            <p>O valor B: {B}</p> 
            <p>A soma é: <button onClick={() => console.log(A + B)}>Clique aqui</button></p> 
        </div>
    )
}

export default Challenge;