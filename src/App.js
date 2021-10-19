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
  let b;

  /* const a = () => {
    console.log(letter1)
    b = wordIncludes ? letter1.value : letter1;
    return b;
  }; */

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Hang-mario Game</h1>
        <Hangman />
        <LetterContainer letter={b} />
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
