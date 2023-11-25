import { endpointWeather } from "../Keys/Keys";
import axios from "axios";
import { WeatherType } from "../Pages/Types/WeatherType";
export const getWeather = async (
  setTempo: React.Dispatch<React.SetStateAction<WeatherType | undefined>>
) => {
  try {
    const res = await axios.get(`${endpointWeather}`);
    const data = res.data;
    setTempo(data);
  } catch (error) {
    console.log(error);
  }
};
