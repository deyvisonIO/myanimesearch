import { useRef, useState } from "react";

interface randomizeProps {
  randomize: () => Promise<void>;
}


export function RandomButton({ randomize }:randomizeProps) {

  const [disable, setDisable] = useState<boolean>(false);

  function disableButton() {
    setDisable(true);

    setTimeout(() => setDisable(false), 1000);

  } 

  return (
    <div>
      <button id="randomizeButton" onClick={() => {
        randomize();
        disableButton();
        }} disabled={disable} >Random</button>
    </div>
  )
}