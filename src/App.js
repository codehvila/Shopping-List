import "./App.css";
import { atom, useRecoilState } from "recoil";

const cityAtom = atom({
  key: "city",
  default: "",
});

function App() {
  const [currentCity, setCurrentCity] = useRecoilState(cityAtom);

  return (
    <div className="App">
      <h1>Enter City</h1>
      <input
        type="text"
        value={currentCity}
        onChange={(e) => {
          setCurrentCity(e.target.value);
        }}
      />
      <h4>
        <div>Weather: </div>
      </h4>
    </div>
  );
}

export default App;
