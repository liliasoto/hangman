import { useState } from "react";
import "../css/hangman.css"

interface HangmanProps {
    words: string[];
    category: string;
}

const Hangman = ({words, category}: HangmanProps) => {
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const displayWord = selectedWord.split('').map((letter, index) => {
        console.log("selectedWord: ", selectedWord) 
        if (index === 0 || guessedLetters.includes(letter)) {
            console.log("guessedLetters: ", guessedLetters);
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