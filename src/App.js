import Hangman from "./components/Hangman/Hangman";
import "./App.css";
import Button from "./components/Hangman/Button";
import { useState } from "react";
import Input from "./components/Hangman/Input";
import WrongAnswersContainer from "./components/WrongAnswersContainer";
import LetterContainer from "./components/Hangman/letterContainer/LetterContainer";

function App() {
  const [myWords, setMyWords] = useState([{ word: "perro", id: 1 }]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Hangman</h1>
        <Hangman />
        <LetterContainer letter="e"></LetterContainer>
        <Button text="ok" actionOnClick={() => console.log("holi")} />
        <Input maxNumber={0} />
        <WrongAnswersContainer wrongLetter="a" />
      </header>
    </div>
  );
}

export default App;
