import React from 'react';
import PropTypes from 'prop-types';
// import { funcionarios } from '../data';

class Result extends React.Component {
    render() {
        const { totalCalorias, inputIdade, inputPeso, sexo, clearInputs } = this.props
        return (
            <section className="resultSection">
                <h1>Resultado</h1>
                <h2 className="totalCalorias">Total de calorias: { totalCalorias }</h2>
                {
                (inputIdade >= 18
                && inputIdade < 30
                && totalCalorias > (14.7 * inputPeso + 496)
                && sexo === 'Feminino') && <div><h2>Status: acima do ideal</h2><h2>Quantidade ideal: { (14.7 * inputPeso + 496) }</h2></div>  }
                {
                (inputIdade >= 18
                && inputIdade < 30
                && totalCalorias < (14.7 * inputPeso + 496)
                && sexo === 'Feminino') && <div><h2>Status: abaixo do ideal</h2><h2>Quantidade ideal: { (14.7 * inputPeso + 496) }</h2></div> }
                {
                (inputIdade >= 30
                && inputIdade < 66
                && totalCalorias > (8.7 * inputPeso + 829)
                && sexo === 'Feminino') && <div><h2>Status: acima do ideal</h2><h2>Quantidade ideal: { (8.7 * inputPeso + 829) }</h2></div> }
                {
                (inputIdade >= 30
                && inputIdade < 66
                && totalCalorias < (8.7 * inputPeso + 829)
                && sexo === 'Feminino') && <div><h2>Status: abaixo do ideal</h2><h2>Quantidade ideal: { (8.7 * inputPeso + 829) }</h2></div> }
                

                {
                (inputIdade >= 18
                && inputIdade < 30
                && totalCalorias > (15.3 * inputPeso + 679)
                && sexo === 'Masculino') && <div><h2>Status: acima do ideal</h2><h2>Quantidade ideal: { (15.3 * inputPeso + 679) }</h2></div> }
                {
                (inputIdade >= 18
                && inputIdade < 30
                && totalCalorias < (15.3 * inputPeso + 679)
                && sexo === 'Masculino') && <div><h2>Status: abaixo do ideal</h2><h2>Quantidade ideal: { (15.3 * inputPeso + 679) }</h2></div> }
                {
                (inputIdade >= 30
                && inputIdade < 66
                && totalCalorias > (8.7 * inputPeso + 879)
                && sexo === 'Masculino') && <div><h2>Status: acima do ideal</h2><h2>Quantidade ideal: { (8.7 * inputPeso + 879) }</h2></div> }
                {
                (inputIdade >= 30
                && inputIdade < 66
                && totalCalorias < (8.7 * inputPeso + 879)
                && sexo === 'Masculino') && <div><h2>Status: abaixo do ideal</h2> <h2>Quantidade ideal: { (8.7 * inputPeso + 879) }</h2></div> }
                <button className="buttonForm" onClick={ clearInputs }>Enviar</button>
            </section>
        )
    }
}

Result.propTypes = {
    totalCalorias: PropTypes.number.isRequired,
}

export default Result;
