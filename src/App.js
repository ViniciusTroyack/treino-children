import logo from "./logo.svg";
import "./App.css";

import CenteredCard from "./components/CenteredCard";
const desulpas = ["Sinto muito", "Mas estou", "Sem criatividade"]; //testando o uso de array
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard children={desulpas[0]} />
        <CenteredCard children={desulpas[1]} />
        <CenteredCard children={desulpas[2]} />
      </header>
    </div>
  );
}

export default App;
