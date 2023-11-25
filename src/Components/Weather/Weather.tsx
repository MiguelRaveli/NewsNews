import classes from "./Weather.module.css";
import { WeatherType } from "../../Pages/Types/WeatherType";
type Tweather = {
  weather: WeatherType;
};
const Weather = ({ weather }: Tweather) => {
  return (
    <>
      <div className={classes.weather}>
        <div className={classes.title_weather}>
          <h2>Weather Forecast</h2>
        </div>
        <div className={classes.info_weather}>
          <p>
            {weather?.location.country} - {weather?.location.name}
          </p>
          <p>{weather?.current.condition.text}</p>
          <div className={classes.iconAndFeelsLike}>
            {" "}
            <img src={weather?.current.condition.icon} alt="" />
            <p>{weather?.current.feelslike_c}º max</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
