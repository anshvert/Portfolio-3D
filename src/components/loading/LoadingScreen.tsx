import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ loaded, setLoaded }) => {
  const { progress } = useProgress();
  const [loadingText,setLoadingText] = useState<string>("Loading ...")
  
  useEffect(() => {
    progress == 100 ? setLoadingText("Loaded") : {}
  },[progress])

  return (
    <div className={`loadingScreen ${loaded ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">{`${loadingText}`}</h1>
          <div className="loadingBar" style={{padding: "20px"}}>
            <div className="loadingScreen__progress">
            <div
              className="loadingScreen__progress__value"
              style={{
                width: `${progress}%`,
              }}/>
        </div>
      </div>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={() => setLoaded(true)}>
          Jump In
        </button>
      </div>
    </div>
  );
};