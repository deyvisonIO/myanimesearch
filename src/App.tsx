import { useState } from 'react'
import { RandomButton } from './Component/RandomButton';
import './App.css'
import { AnimeInfo } from './Component/AnimeInfo';

function App() {

  const [anime, setAnime] = useState({});

  function addAnime(data:any): void {
      setAnime(() => data);
  }  

  
  async function randomize(): Promise<void> {
    const response = await fetch('https://api.jikan.moe/v4/random/anime');
    const { data } = await response.json();
    addAnime(data);
  }

  return (
    <div>
      <AnimeInfo anime={anime} />
      <RandomButton randomize={randomize} />
    </div>
  )
}

export default App
