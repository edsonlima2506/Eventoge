import Header from './Components/Header';
import Form from './Components/Form';
import Pratos from './Components/Pratos';
import Result from './Components/Result';
import Lista from './Components/Lista'
import pratosInfos from './data';
import { funcionarios } from './data'
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      totalCalorias: 0,
      inputNome: '',
      inputIdade: 0,
      inputSso: 0,
      inputPeso: 0,
      sexo: 'Masculino',
      listaVazia: true,
    }

    this.somaCalorias = this.somaCalorias.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  somaCalorias({ target }) {
    const cal = target.value
    this.setState((estadoAnterior, _props) => ({
      totalCalorias: Number(estadoAnterior.totalCalorias) + Number(cal)
    }))
  }

  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value
    });
  }

  clearInputs() {
    const { totalCalorias } = this.state;
    const nome = document.getElementsByName('inputNome');
    const idade = document.getElementsByName('inputIdade');
    const sso = document.getElementsByName('inputSso');
    const peso = document.getElementsByName('inputPeso');
    const sexo = document.getElementsByName('sexo');
    funcionarios.push({
      nome: nome[0].value,
      idade: idade[0].value,
      sso: sso[0].value,
      peso: peso[0].value,
      sexo: sexo[0].value,
      total: totalCalorias
    })
    nome[0].value = '';
    idade[0].value = '';
    sso[0].value = '';
    peso[0].value = '';
    this.setState ({
      totalCalorias: 0,
      inputNome: '',
      inputIdade: 0,
      inputSso: 0,
      inputPeso: 0,
      sexo: 'Masculino',
      listaVazia: false,
    })
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
  }

  render() {
    const { totalCalorias, inputNome, inputIdade, inputPeso, inputSso, sexo, listaVazia } = this.state;
    const funcionariosSalvos = JSON.parse(localStorage.getItem('funcionarios'));
    return (
      <div className="App">
        <Header />
        <Form handleChange={ this.handleChange }/>
        <div className="containerPratos">
        { pratosInfos.map((prato) => 
          <Pratos image={ prato.imagem } name={ prato.nome } calorias={ prato.calorias } somaCalorias={ this.somaCalorias }/>
        ) }
        </div>
        <Result
        totalCalorias={ totalCalorias }
        inputNome={ inputNome }
        inputIdade={ inputIdade }
        inputPeso={ inputPeso }
        inputSso={ inputSso }
        sexo={ sexo }
        clearInputs={ this.clearInputs }
        />
        { listaVazia === false && <Lista
        funcionariosSalvos={ funcionariosSalvos }
        /> }
      </div>
    );
  }
  }

export default App;
