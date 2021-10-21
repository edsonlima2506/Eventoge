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
    }

    this.somaCalorias = this.somaCalorias.bind(this);
  }

  somaCalorias({ target }) {
    const cal = target.value
    this.setState((estadoAnterior, _props) => ({
      totalCalorias: Number(estadoAnterior.totalCalorias) + Number(cal)
    }))
  }

  render() {
    const { totalCalorias } = this.state;
    return (
      <div className="App">
        <Header />
        <Form />
        <div className="containerPratos">
        { pratosInfos.map((prato) => 
          <Pratos image={ prato.imagem } name={ prato.nome } calorias={ prato.calorias } somaCalorias={ this.somaCalorias }/>
        ) }
        </div>
        <Result totalCalorias={ totalCalorias }/>
      </div>
    );
  }
  }

export default App;
