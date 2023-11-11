import { useState } from "react";
import { Button } from "../utils/Button";

interface randomizeProps {
  getRandomAnime: () => Promise<void>;
}


export function RandomButton({ getRandomAnime }:randomizeProps) {
  const [disable, setDisable] = useState<boolean>(false);

  return (
    <Button id="randomizeButton" className="w-auto my-2" onClick={() => {
        setDisable(true);
        getRandomAnime().then(() => setDisable(false)); 
        }} disabled={disable} >
        Random
    </Button>
  )
}
