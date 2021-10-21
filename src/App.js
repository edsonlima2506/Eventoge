import Header from './Components/Header';
import Form from './Components/Form';
import Pratos from './Components/Pratos';
import Result from './Components/Result';
import pratosInfos from './data';
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
      sexo: 'Masculino'
    }

    this.somaCalorias = this.somaCalorias.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { totalCalorias, inputNome, inputIdade, inputPeso, inputSso, sexo } = this.state;
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
        />
      </div>
    );
  }
  }

export default App;
