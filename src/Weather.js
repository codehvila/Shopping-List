import { useRecoilValueLoadable } from "recoil";
import { weatherSelector } from "./App";

function Weather() {
  const { state, contents } = useRecoilValueLoadable(weatherSelector);

  switch (state) {
    case "hasValue":
      return contents;

    case "hasError":
      return contents.message;

    case "loading":
      return "Loading weather...";

    default:
      return undefined;
  }
}

export default Weather;
