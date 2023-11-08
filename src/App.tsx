import { useState } from 'react'
import { RandomButton } from './Component/RandomButton';
import './App.css'
import { AnimeInfo } from './Component/AnimeInfo';

function App() {
  const [anime, setAnime] = useState({});

  function addAnime(data:any): void {
      setAnime(() => data);
  }  


  async function getRandomAnime(): Promise<void> {
    let safe = false;
    let data: any = {};
    try {
      while (!safe) {
        data = await randomize()
        if (data.genres[0]?.name !== "Hentai" && data.rating !== "Rx - Hentai") {
          console.log("Anime safe!!!")
          safe = true
        }
      }
      if (Object.keys(data).length > 0) {
        addAnime(data);
      }

    } catch (e: unknown) {
      console.log(e);
    }
  }
  
  async function randomize(): Promise<object> {
    const response = await fetch('https://api.jikan.moe/v4/random/anime');
    const { data } = await response.json();
    return data
  }

  return (
    <div>
      <AnimeInfo anime={anime} />
      <RandomButton getRandomAnime={getRandomAnime} />
    </div>
  )
}

export default App
