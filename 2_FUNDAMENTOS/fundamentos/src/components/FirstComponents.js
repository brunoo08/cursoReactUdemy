// arquivos de style

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //essa função faz isso

    /*
    multi line
    */
   
    return(
        <div>
            {/*Algum comentario*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu text</p>
            <MyComponent />
        </div>
    )
};

export default FirstComponent;