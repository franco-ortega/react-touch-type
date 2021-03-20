import { useState } from 'react';
import './App.css';

const App = () => {
  const INITIAL_GAME_STATE = {
    victory: false,
    startTime: null,
    endTime: null
  }

  const [userText, setUserText] = useState('');
  const [snippet, setSnippet] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const SNIPPETS = [
    'Welcome to the Thunderdome!',
    'Beware the raven.',
    'One does not simply walk into Mordor.',
    'Fireworks and fireflies cause the fire to rise.',
    'Doldrums are not for banging.',
    'Ice is nice when rice lacks spice.',
    'Who the what is what you seek?',
    'Too many twos to tune today!',
    'How does the crow fly when the fly crows?',
    'Thank you goodbye zebra fish.',
    'Relax that axe and rest your back.'
  ];

  const chooseSnippet = (snippetIndex) => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({
      ...gameState,
      startTime: new Date().getTime(),
      victory: false
    })
    setUserText('');
  };

  const updateUserTest = (e) => {
    setUserText(e.target.value);

    if(e.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: (new Date().getTime() - gameState.startTime) / 1000
      });
    };

    if(e.target.value === '') {
      setGameState({
        ...gameState,
        victory: false,
        startTime: new Date().getTime()
      });
    };
    console.log(e.target.value)
  };

  return (
    <div>
      <h2>Touch Type</h2>
      <hr />
      <h3>
        Select text:
      </h3>
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
      <hr />
      <h3>Text</h3>
      <p>
        {snippet}
      </p>
      <input
        value={userText}
        onChange={updateUserTest}
      />

      <h4>
        {gameState.victory ? `Congrats!! Time: ${gameState.endTime} seconds` : 'You can do it!'}
      </h4>
      
    </div>
  );
}

export default App;
