const fetchWeather = async (city) => {
  if (city === "") return undefined;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city === "Albacete") resolve(15);
      if (city === "New York") resolve(9);
      if (city === "Paris") {
        resolve(12);
      }
      if (city !== "Albacete" || city !== "Paris" || city !== "New York") {
        resolve(null);
      }
    }, 2400);
  });
};

export { fetchWeather };
