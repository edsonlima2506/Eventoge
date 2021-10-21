import React from 'react';

class Lista extends React.Component {
    render() {
        const { funcionariosSalvos } = this.props;
        return (
            <div>
                { funcionariosSalvos.map((funcionario) => 
                    <div className="listaDeFuncionarios">
                        <h2>Nome: { funcionario.nome }</h2>
                        <h2>Idade: { funcionario.idade }</h2>
                        <h2>SSO: { funcionario.sso }</h2>
                        <h2>Peso: { funcionario.peso }</h2>
                        <h2>Sexo: { funcionario.sexo }</h2>
                        <h2>Calorias: { funcionario.total }</h2>
                    </div>
                ) }
            </div>
        )
    }
}

export default Lista;
