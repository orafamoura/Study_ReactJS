import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Forms from './components/Forms';

function App() {

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
    }

  return (
    <div className="App">
      <Banner/>
      <Forms aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
