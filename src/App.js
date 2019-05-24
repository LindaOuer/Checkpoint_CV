import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Competence from "./components/Competence";
import { portrait, phone, mail, adresse } from "./images";

class App extends Component {
  render() {
    const work1 = [
      {
        content:
          "Programmation Python (Cours, TDs, TPs) cycle prÃ©paratoire et IngÃ©nieur MÃ©catronique."
      },
      {
        content: "Conception et Base de DonnÃ©es (Cours IntÃ©grÃ©) Licence SantÃ©."
      }
    ];
    const work2 = [
      {
        content:
          "Conception et Base de DonnÃ©es (Cours IntÃ©grÃ©) IngÃ©nieur GÃ©omatique."
      },
      {
        content: "Base de DonnÃ©es (Cours IntÃ©grÃ©) Licence MÃ©canique."
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-row">
            <div className="LeftColumn">
              <h2>Linda Ouerfelli</h2>
              <div className="App-Info">
                <img src={phone} alt="" className="icons" /> <p>21123987</p>
                <img src={mail} alt="" className="icons" />
                <p>linda.Ouerfelli@gmail.com</p>
                <img src={adresse} alt="" className="icons" /> <p>Tunisia</p>
              </div>
            </div>
            <div className="RightColumn">
              <img src={portrait} alt="" className="Portrait" />
            </div>
          </div>
        </header>

        <div className="App-row">
          <div className="LeftColumn">
            <h2>EXPÃRIENCES PROFESSIONNELLES</h2>
            <Card
              title="Enseignant Assistant"
              date="Septembre 2018 â Aujourdâhui"
              loc="ULT"
              content=""
              List={work1}
            />
            <Card
              title="Enseignant Assistant"
              date="Octobre 2015 â AoÃ»t 2018"
              loc="ESAT"
              content=""
              List={work2}
            />
          </div>
          <div className="RightColumn">
            <h2> FORMATION ET DIPLÃMES OBTENUS </h2>
            <Card
              title="MastÃ¨re en Informatique appliquÃ©e Ã  la gestion"
              date="2009 â 2011"
              loc="ISG Tunis"
              content=""
              List=""
            />
            <Card
              title="MaÃ®trise en Informatique appliquÃ©e Ã  la gestion"
              date="2005 â 2009"
              loc="ISG Tunis"
              content=""
              List=""
            />
            <Card
              title="BaccalaurÃ©at Section MathÃ©matiques"
              date="2005"
              loc="Khaznadar Bardo"
              content=""
              List=""
            />
            <h2> Langues </h2>
            <Competence title="Arabe" percent="100" />
            <Competence title="Anglais" percent="90" />
            <Competence title="Francais" percent="90" />
            <Competence title="Allemand" percent="20" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
