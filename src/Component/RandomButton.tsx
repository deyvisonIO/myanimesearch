import { useState } from "react";

interface randomizeProps {
  getRandomAnime: () => Promise<void>;
}


export function RandomButton({ getRandomAnime }:randomizeProps) {
  const [disable, setDisable] = useState<boolean>(false);

  function disableButton() {
    setDisable(true);
    setTimeout(() => setDisable(false), 1000);
  } 

  return (
    <div>
      <button id="randomizeButton" onClick={() => {
        getRandomAnime(); 
        disableButton();
        }} disabled={disable} >Random</button>
    </div>
  )
}
