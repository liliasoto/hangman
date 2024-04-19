import { useState } from "react";
import "../css/hangman.css"

interface HangmanProps {
    words: string[];
    //Colocamos la categoría como uno de los props de HangmanProps
    category: string;
}

//Agregamos la categoría
const Hangman = ({words, category}: HangmanProps) => {
    const [gameStarted, setGameStarted] = useState(false); //Agregué una nueva const que diga si el juego se empezó o no
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    //Ahora hice una función flecha para que al presionar el botón se inicie el juego
    const startGame = () => {
        //Dejamos la const setGameStarted como true para que se muestre el juego
        setGameStarted(true);
        //Tomamos un número random para seleccionar una palabra random inicial de la lista
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
    };

    //Con esta condición hacemos que si no se ha iniciado el juego se muestre SOLO la pista y el botón
    //Ya que se haga clic en el botón se inicia el juego y se muestra lo demás (desaparece el botón)
    if (!gameStarted) {
        return (
            <div>
                <p>{category}</p>
                <button onClick={startGame}>Play</button>
            </div>
        );
    }

    const displayWord = selectedWord.split('').map((letter, index) => {
        console.log("selectedWord: ", selectedWord)
        if (guessedLetters.includes(letter)) {
          console.log("guessedLetters: ",guessedLetters)
          return letter;
        } else {
          return '_';
        }
    });

    const handleGuess = (letter: string) => {
        if(!guessedLetters.includes(letter)){
            setGuessedLetters([...guessedLetters, letter]);
            if(!selectedWord.includes(letter)){
                setErrorCount((prev) => prev + 1);
                console.log("setErrorCount", setErrorCount);
            }
        }
    };

    const restartGame = () => {
        const newWordIndex = Math.floor(Math.random()*words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]); //Reiniciar las letras adivinadas
        setErrorCount(0);
    };

    return (
        <div>
            <p>{category}</p>
            <p>{displayWord.join(' ')}</p>
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)}></input>
            {(displayWord.join('') === selectedWord || errorCount > 5) && (
                <button onClick={() => {
                    restartGame();
                    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                }}>Select New Word</button>
            )}
            <p>Cantidad de errores {errorCount}</p>
            {displayWord.join('') === selectedWord && (
                <p>You won in this round</p>
            )}
        </div>
    );
};

export default Hangman;