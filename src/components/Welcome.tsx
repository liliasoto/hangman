import hangman from '../img/hangman.png';
import "../css/main.css"

export default function Welcome(){
    return(
        <>
            <div className="wrapper">
                <h1>Welcome to Hangman Game!!</h1>
                <h2>Classical game</h2>
                <img src={hangman} alt='Hangman image'></img>
            </div>
        </>
    );
}