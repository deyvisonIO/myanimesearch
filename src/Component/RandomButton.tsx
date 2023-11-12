import { useState } from "react";
import { Button } from "../utils/Button";

interface randomizeProps {
  getRandomAnime: (signal: AbortSignal) => Promise<void>;
}


export function RandomButton({ getRandomAnime }:randomizeProps) {
  const [disable, setDisable] = useState<boolean>(false);
  const controller = new AbortController();
  const signal = controller.signal;

  return (
    <Button id="randomizeButton" className="w-full my-2" onClick={() => {
        setDisable(true);
        getRandomAnime(signal).then(() => setDisable(false));
        return () => { controller.abort() }
        }} disabled={disable} >
        Random
    </Button>
  )
}
