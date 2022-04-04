import { useEffect } from "react";
import "./App.css";
import { atom, useSetRecoilState, useRecoilValue } from "recoil";

const count = atom({
  key: "count",
  default: 0,
});

const CurrentCount = () => {
  const currentCount = useRecoilValue(count);
  useEffect(() => {
    console.log("Render Count");
  });
  return <p>Current Count: {currentCount}</p>;
};

const IncrementButton = () => {
  const setCurrentCount = useSetRecoilState(count);
  useEffect(() => {
    console.log("Render Button");
  });
  const incrementCount = () => {
    setCurrentCount((count) => count + 1);
  };

  return <button onClick={incrementCount}>+1</button>;
};

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <CurrentCount />
      <IncrementButton />
    </div>
  );
}

export default App;
