import Welcome from './components/Welcome.tsx';
import Hangman from './components/Hangman.tsx';

function App(){

    function chooseRandomListWithCategory() {
        const lists = [
            { category: 'Fruits', list: ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'papaya', 'pear', 'pineapple', 'plum', 'strawberry'] },
            { category: 'Clothes and Accessories', list: ['shirt', 'pants', 'dress', 'jacket', 'sweater', 'skirt', 'hat', 'scarf', 'gloves', 'tie', 'belt', 'socks', 'shoes', 'handbag', 'sunglasses'] },
            { category: 'Colors', list: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'teal', 'maroon', 'navy', 'violet'] },
            { category: 'Countries', list: ['USA', 'Canada', 'Brazil', 'Mexico', 'France', 'Germany', 'Japan', 'China', 'India', 'Australia', 'Russia', 'South Africa', 'Spain', 'Italy', 'Argentina'] },
            { category: 'Vegetables', list: ['carrot', 'broccoli', 'cabbage', 'spinach', 'potato', 'tomato', 'cucumber', 'bell pepper', 'onion', 'garlic', 'lettuce', 'zucchini', 'eggplant', 'celery', 'mushroom'] }
        ];
    
        const randomIndex = Math.floor(Math.random() * lists.length);
        const randomList = lists[randomIndex];
        return { category: randomList.category, words: randomList.list };
    }
    
    const { category, words } = chooseRandomListWithCategory();
    console.log("Category:", category);
    console.log("Words:", words);
    
    return(
        <div className='App'>
            <Welcome/>
            <Hangman words={words} category={category}/>
        </div>
    );
}

export default App;