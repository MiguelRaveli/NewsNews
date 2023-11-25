import { endpointWeather } from "../Keys/Keys";
import { WeatherType } from "../Pages/Types/WeatherType";
export const getWeather = async (
  setTempo: React.Dispatch<React.SetStateAction<WeatherType | undefined>>
) => {
  try {
    await fetch(endpointWeather)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTempo(data);
      });
  } catch (error) {
    console.log(error);
  }
};
