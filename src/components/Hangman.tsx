import { useState } from "react";
import "../css/hangman.css";
import zeroImg from "../img/0.png";
import oneImg from "../img/1.png";
import twoImg from "../img/2.png";
import threeImg from "../img/3.png";
import fourImg from "../img/4.png";
import fiveImg from "../img/5.png";
import { useWinCount } from './WinCountContext.tsx';

interface HangmanProps {
    words: string[];
    // Colocamos la categoría como uno de los props de HangmanProps
    category: string;
}

// Agregamos la categoría
const Hangman = ({words, category }: HangmanProps) => {
    const [gameStarted, setGameStarted] = useState(false); // Agregué una nueva const que diga si el juego se empezó o no
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    // Ahora hice una función flecha para que al presionar el botón se inicie el juego
    const startGame = () => {
        // Dejamos la const setGameStarted como true para que se muestre el juego
        setGameStarted(true);
        // Tomamos un número random para seleccionar una palabra random inicial de la lista
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
    };

    // Con esta condición hacemos que si no se ha iniciado el juego se muestre SOLO la pista y el botón
    // Ya que se haga clic en el botón se inicia el juego y se muestra lo demás (desaparece el botón)
    if (!gameStarted) {
        return (
            <div>
                <p>{category}</p>
                <button onClick={startGame}>Play</button>
            </div>
        );
    }

    const displayWord = selectedWord.split('').map((letter) => {
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
        setGuessedLetters([]); // Reiniciar las letras adivinadas
        setErrorCount(0);
    };

    const { updateWinCount } = useWinCount();
    const updateWins = () => {
        updateWinCount();
        // Resto del código...
      };

    return (
        <div>
            <p>{category}</p>
            <img src={errorCount === 0 ? zeroImg : errorCount === 1 ? oneImg : errorCount === 2 ? twoImg : errorCount === 3 ? threeImg : errorCount === 4 ? fourImg : fiveImg} alt="Hangman" />
            <p>{displayWord.join(' ')}</p>
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)}></input>
            {(displayWord.join('') === selectedWord || errorCount > 5) && (
                <button onClick={() => {
                    restartGame();
                    updateWins();
                    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                }}>Select New Word</button>
            )}
            <p>Errors: {errorCount}</p>
            {displayWord.join('') === selectedWord && (
                <div>
                    <p>You won in this round</p> 
                </div>
            )}
        </div>
    );
};

export default Hangman;