import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Seu nome" className="inputForm"/>
                <input type="text" placeholder="Sua idade" className="inputForm"/>
                <input type="text" placeholder="Seu SSO" className="inputForm"/>
                <input type="text" placeholder="Seu Peso" className="inputForm"/>
                <select name="" id="" className="inputForm">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <button className="buttonPlay" type="button">Começar</button>
            </form>
        )
    }
}

export default Form;
