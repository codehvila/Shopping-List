import { useRecoilValue } from "recoil";
import { weatherSelector } from "./App";

function Weather() {
  const cityWeather = useRecoilValue(weatherSelector);
  return <div>{cityWeather}</div>;
}

export default Weather;
