import { useState } from 'react';

function SuperSimpleGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    
    if (userGuess === number) {
      setMessage('🎉 تو برنده شدی! دوباره بازی کن!');
      setNumber(Math.floor(Math.random() * 100) + 1);
      setGuess('');
    } else if (userGuess < number) {
      setMessage('📈 برو بالا!');
    } else {
      setMessage('📉 برو پایین!');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>🎮 بازی ساده حدس عدد</h1>
      <p>یه عدد بین ۱ تا ۱۰۰ حدس بزن:</p>
      
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      
      <button 
        onClick={handleGuess}
        style={{ 
          padding: '8px 16px', 
          marginLeft: '10px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        حدس بزن
      </button>
      
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{message}</p>
      
      {message.includes('برنده') && (
        <button 
          onClick={() => {
            setNumber(Math.floor(Math.random() * 100) + 1);
            setGuess('');
            setMessage('');
          }}
          style={{ marginTop: '10px' }}
        >
          بازی جدید
        </button>
      )}
    </div>
  );
}

export default SuperSimpleGame;