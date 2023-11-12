import {  Suspense, useEffect, useState } from 'react'
import { RandomButton } from './Component/RandomButton';
import { AnimeInfo } from './Component/AnimeInfo';
import { Loading } from './utils/Loading';

function App() {
  const [anime, setAnime] = useState({});
  const [isPending, setIsPending] = useState<boolean>(true);

  function addAnime(data:any): void {
      setAnime(() => data);
  }  

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getRandomAnime(signal);

    return () => {
      controller.abort();
    }
  }, [])


  async function getRandomAnime(signal: AbortSignal): Promise<void> {
    setIsPending(true);
    let safe = false;
    let data: any = {};
    try {
      while (!safe) {
        data = await randomize(signal);
        if (data.error)
          throw new Error(data.error);
        if (data?.genres[0]?.name !== "Hentai" && data?.rating !== "Rx - Hentai")
          safe = true
      }
      addAnime(data);
    } catch (e: unknown) {
      console.log(e);
    } finally {
      setIsPending(false);
    }
  }
  
  async function randomize(signal: AbortSignal): Promise<object> {
    try {
      const response = await fetch('https://api.jikan.moe/v4/random/anime', { signal });
      const { data } = await response.json();

      return data;
    } catch(e: any) {
      console.log(e);
      return {error: e.message}
    }
  }

  return (
    <div className="rounded-2xl p-4 h-full md:h-[700px] flex flex-col justify-center items-stretch bg-white">
      <Suspense fallback={<Loading />}>
        <AnimeInfo anime={anime} isPending={isPending} />
      </Suspense>
      <RandomButton getRandomAnime={getRandomAnime} />
    </div>
  )
}

export default App
