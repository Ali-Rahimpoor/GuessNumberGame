import './guess.css'
import { useState,useEffect } from 'react';
const GuessGame = ()=>{
   
    const [message,setMessage] = useState('');
    const [secondMessage,setSecondMessage] = useState('');
    const [guess,SetGuess] = useState('0');
    const [pcNumber,setPcNumber] = useState(Math.floor(Math.random()*100)+1);
    const [counter,setCounter] = useState(0);
    const clickGuess = (e)=>{
        e.preventDefault();
        const userGuess = parseInt(guess);
        if(userGuess===pcNumber){
            setMessage('YES! 🎉')
            setSecondMessage('Retry');
            
        }else if(userGuess > pcNumber){
            setMessage('Choose Less! ⬇️')
            setSecondMessage('');
            setCounter(counter +1);
        }
        else{
            setMessage('Choose More! ⬆️')          
            setSecondMessage('');  
            setCounter(counter +1);
        }
    }
    const clickRetry = (e)=>{
        e.preventDefault();
        setPcNumber(Math.floor(Math.random()*100)+1);
        SetGuess('0');
        setCounter(0);
        setMessage('');
        setSecondMessage('');
    }
   
        // TIMER
        const [timer,setTimer] = useState(0);
        useEffect(()=>{
            const interval = setInterval(()=>{
                setTimer(prev => prev+1);
            },1000);

            return () => clearInterval(interval);
        },[]);
    
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
            <p style={{fontSize:"1.2rem"}} >Timer: {timer}</p>
            <p style={{fontSize:"1.1rem"}}>Number of Your Guess : {counter}</p>
            <h2>{message}</h2>
            <button
            style={secondMessage ==="" ? {display:'none'}:{display:'inline'}}
            className='btn'
            onClick={clickRetry}
            >{secondMessage}</button>
        </div>
    )

}

export default GuessGame;
