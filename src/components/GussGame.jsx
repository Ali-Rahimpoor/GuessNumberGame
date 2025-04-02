import './guess.css'
import { useState } from 'react';
const GussGame = ()=>{

    const [message,setMessage] = useState('');
    const [guess,SetGuess] = useState('');
    const [pcNumber,setPcNumber] = useState(Math.floor(Math.random()*100)+1);
    const clickGuess = (e)=>{
        e.preventDefault();
        const userGuess = parseInt(guess);
        if(userGuess===pcNumber){
            setMessage('YES!')
        }else if(userGuess > pcNumber){
            setMessage('Choose Less! ⬇️')
        }
        else{
            setMessage('Choose More! ⬆️')          
        }
    }
    return(
        <div className='guessGame-container'>
            <h1>Guess the Number ! 👾</h1>
            <p>Choose a Number between 1 - 100 </p>
            <form className='guessGame-form'>
                <input
                type='number'
                value={guess}
                onChange={e => SetGuess(e.target.value)}
                />
                <button
                onClick={clickGuess}
                >Guess</button>
            </form>
            <h2>{message}</h2>
        </div>
    )

}

export default GussGame;
