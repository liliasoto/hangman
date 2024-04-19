import Welcome from './components/Welcome.tsx';
import Hangman from './components/Hangman.tsx';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];

function App(){
    return(
        <div className='App'>
            <Welcome/>
            <Hangman words={words}/>
        </div>
    );
}

export default App;