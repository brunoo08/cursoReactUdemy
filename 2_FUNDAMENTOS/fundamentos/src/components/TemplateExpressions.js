const TemplateExpressions = () => {
    const name = "Bruno";
    const data = {
        age: 26,
        job: 'Programador'
    };

    return (
        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>Você é {data.job}, e tem {data.age} anos de idade</p>
            <p>{4+4}</p>
        </div>
    )
}

export default TemplateExpressions;