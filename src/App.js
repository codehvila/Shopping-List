import { Suspense } from "react";
import "./App.css";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather } from "./WeatherApi";
import Weather from "./Weather";

const cityAtom = atom({
  key: "city",
  default: "",
});

export const weatherSelector = selector({
  key: "weather",
  get: async ({ get }) => {
    const city = get(cityAtom);
    try {
      const weather = await fetchWeather(city);
      if (weather === null) return "City not found";
      return weather ? `Weather: ${weather} °C` : "Enter a city";
    } catch (error) {
      return error.message;
    }
  },
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
        <Weather />
      </h4>
    </div>
  );
}

export default App;
