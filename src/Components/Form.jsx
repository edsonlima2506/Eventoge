import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Seu nome" className="inputForm"/>
                <input type="text" placeholder="Sua idade" className="inputForm"/>
                <input type="text" placeholder="Seu SSO" className="inputForm"/>
                <select name="" id="">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </form>
        )
    }
}

export default Form;