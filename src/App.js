import logo from './logo.svg';
import './App.css';
import { MiprimerEstado } from './components/MiprimerEstado';
import { MostrarAño } from './components/MostrarAño';

function App() {
const fecha = new Date();
const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Estado en React - Hook useState</h1>

        <MiprimerEstado/>
        <MostrarAño year={yearActual}/>
        
      </header>
    </div>
  );
}

export default App;
