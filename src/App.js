import Hangman from "./components/Hangman/Hangman";
import "./App.css";
import { useState } from "react";
import WrongAnswersContainer from "./components/WrongAnswersContainer";
import LetterContainer from "./components/Hangman/letterContainer/LetterContainer";
import Form from "./components/Hangman/Form";

function App() {
  const [myWords] = useState(["perro"]);
  // map para comprobar si el input[ pasado está en la palabra.

  const wordIncludes = (input) => {
    const wordSplitted = myWords[0].split("");
    console.log(wordSplitted.includes(input));
  };
  let letter1;
  const handleInputChange = (e) => {
    letter1 = e.target.value;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Hangman</h1>
        <Hangman />
        <LetterContainer letter="e"></LetterContainer>
        <Form
          text="ok"
          actionOnClick={(leter) => wordIncludes(letter1)}
          maxNumber={1}
          func={(e) => handleInputChange(e)}
        ></Form>
        <WrongAnswersContainer wrongLetter="a" />
      </header>
    </div>
  );
}

export default App;
