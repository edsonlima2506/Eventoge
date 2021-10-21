import React from 'react';

class Form extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <form>
                <input onChange={ handleChange } type="text" placeholder="Seu nome" className="inputForm" name="inputNome"/>
                <input onChange={ handleChange } type="text" placeholder="Sua idade" className="inputForm" name="inputIdade"/>
                <input onChange={ handleChange } type="text" placeholder="Seu SSO" className="inputForm" name="inputSso"/>
                <input onChange={ handleChange } type="text" placeholder="Seu Peso" className="inputForm" name="inputPeso"/>
                <select onChange={ handleChange } name="sexo" id="" className="inputForm">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </form>
        )
    }
}

export default Form;
