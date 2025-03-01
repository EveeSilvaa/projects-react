/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import NoResultsDiv from "./components/NoResultsDiv";
import { weatherCodes } from "./constants";


const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecasts, setHourlyForecasts] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const searchInputRef = useRef(null);


  const filterHourlyForecast = (HourlyData) => {
     const currentHour = new Date().setMinutes(0, 0, 0);
     const next24Hours = currentHour + 24 * 60 * 60 * 1000;

     // filtra os dados por hora para incluir apenas as próximas 24 horas
     const next24HoursData = HourlyData.filter(({time}) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >=currentHour && forecastTime <= next24Hours;
    });

    setHourlyForecasts(next24HoursData);
  };

  //Busca detalhes meteorológicos com base no URL da API
  const getWeatherDeatails = async (API_URL) => {
    setHasNoResults(false);
    window.innerWidth <= 768 && searchInputRef.current.focus();

    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw new Error();
      const data = await response.json();
      
      // extrair dados meteorológicos atuais
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) => weatherCodes[icon].includes(data.
      current.condition.code));

      setCurrentWeather({ temperature, description, weatherIcon });

      // combinar dados horários de ambos os dias de previsão
      const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.
      forecastday[1].hour];


      searchInputRef.current.value = data.location.name;
      filterHourlyForecast(combinedHourlyData);
    } catch {
      //definir o estado sethasnoresults se houver um erro
      setHasNoResults(true);
    }
  };

  // busca detalhes meteorológicos para a cidade padrão
  useEffect(() => {
    const defaultCity = "London"; // cidade padrão
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDeatails(API_URL);
  }, []);


  return (
    <div className="container">
     {/* seção de pesquisa */}
    <SearchSection getWeatherDeatails={getWeatherDeatails} searchInputRef={searchInputRef} />

     {/* renderização condicional com base no estado hasNoResults */}
    
     {hasNoResults ? (
      <NoResultsDiv />
     ) : (
      <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

    {/* lista de previsão do tempo por hora */}
      <div className="hourly-forecast">
        <ul className="weather-list">
        {hourlyForecasts.map((hourlyWeather) => (
          <HourlyWeatherItem key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather} />
        ))}
        </ul>
      </div>
    </div>
     )}  
  </div>
  );
};

export default App;
