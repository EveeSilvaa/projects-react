const CurrentWeather = ({ CurrentWeather }) => {
  return (
    <div className="current-weather">
        <img src={`icons/${CurrentWeather.weatherIcon}.svg`} className="weather-icon" />
        <h2 className="temperature">
        {CurrentWeather.temperature}<span>°C</span>
        </h2>
        <p className="description">{CurrentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;