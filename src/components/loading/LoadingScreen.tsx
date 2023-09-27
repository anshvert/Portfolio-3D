import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ loaded, setLoaded }) => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen ${loaded ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Loading ... </h1>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={setLoaded}
        >
          Enter
        </button>
      </div>
    </div>
  );
};