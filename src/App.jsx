import { useState } from "react";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";
import { useEffect } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

function App() {
  const [isLoadingOver, seIsLoadingOver] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState([]);

  const playClick = () => {
    console.log("Game started", difficultyLevel.toString());
  };

  //Loading
  useEffect(() => {
    setTimeout(() => seIsLoadingOver(true), 3200);
  }, []);

  return (
    <>
      {!isLoadingOver ? (
        <LoadingPage />
      ) : (
        <>
          {!difficultyLevel[0] ? (
            <StartPage
              setDifficultyLevel={setDifficultyLevel}
              playClick={playClick}
            />
          ) : (
            <GamePage difficultyLevel={difficultyLevel} />
          )}
        </>
      )}
    </>
  );
}

export default App;
