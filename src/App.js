import Header from './Components/Header';
import Form from './Components/Form';
import Pratos from './Components/Pratos';
import pratosInfos from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <div className="containerPratos">
      { pratosInfos.map((prato) => 
        <Pratos image={ prato.imagem } name={ prato.nome }/>
      ) }
      </div>
    </div>
  );
}

export default App;
