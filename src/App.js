import './App.css';
import Cartao from './components/Cartao'
import { useState } from 'react'

function App() {

  const [vezes, setVezes] = useState(0)
  const [theme, setTheme] = useState("light")
  const [cardColor, setCardColor] = useState("lightblue")

  const paixaoPeloProfessor = () => {

    setVezes(50)

  }

  const setarCoresDosCartoes = (color) => {

    setCardColor(color)

  }


  return (
    <div className={`App ${theme}`}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p> Vezes que o tomás disse que ama o professor : {vezes}</p>

      <button> Setar Cor Aleatória dos Cartões </button>

      <button onClick={() => { setVezes(vezes + 1) }}> aumentar </button>
      <button onClick={() => { setVezes(vezes - 1) }}> diminuir </button>

      <button onClick={() => paixaoPeloProfessor()}> Bernardo é <strong>amigo</strong> do professor </button>
      <button onClick={() => setarCoresDosCartoes("red")}> Setar para Vermelho </button>
      <button onClick={() => setarCoresDosCartoes("green")}> Setar para Verde </button>

      <button id='theme-button' className={theme} onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }}> Change Theme </button>

      <Cartao cardColor={cardColor} cvv="696" number="0010 1242 1152 1202" />
      <Cartao cardColor={cardColor} cvv="969" number="1010 4242 8152 1206" />
      <Cartao cardColor={cardColor} cvv="699" number="8010 6772 8152 1204" />
      <Cartao cardColor={cardColor} cvv="669" number="9010 5552 8152 1201" />
    </div>
  );
}

export default App;
