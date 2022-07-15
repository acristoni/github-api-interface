import React, { useState } from "react";
import Header from "./components/Header/index.js"
import Mapa from "./components/mapa"
import Resultado from "./components/Resultado"
import './App.css'

const App = () => {
  const [portoEscolhido, setPortoEscolhido] = useState({name: 'Carregando...'})

  const PortoEscolhido = (porto) => {
    setPortoEscolhido(porto);
  }

  return (
      <div>
        <Header />
        <div id="main">
          <Mapa PortoEscolhido={PortoEscolhido}/>
          <Resultado portoEscolhido={portoEscolhido}/>
        </div>
      </div>  
  ) 
};

export default App;
