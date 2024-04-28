import hangman from '../img/hangman.png';
import "../css/main.css"
//Aquí importo los hooks
import { useEffect, useState } from 'react';

export default function Welcome(){
    //Inicializamos la variable count en 0 usando useState()
    const [count, setCount] = useState(0) 
    
    //Agregamos el useEffect(), este va a actualizar la variable count cada segundo
    //aumentandola en 1, el efecto se sincroniza cada que el componente se monta y se
    //desincroniza cada que el componente se desmonta como podemos ver en las dependencias []
    useEffect(() => {
        const key= setInterval(()=>{
          setCount(count=>count+1)
        },1000);
    
        return () => {
          clearInterval(key);
        };
      }, [])

    return(
        <>
            <div className="wrapper">
                <h1>Welcome to Hangman Game!!</h1>
                <h2>Classical game</h2>
                <img src={hangman} alt='Hangman image'></img>
                <p> You've been playing for {count} seconds</p>
            </div>
        </>
    );
}