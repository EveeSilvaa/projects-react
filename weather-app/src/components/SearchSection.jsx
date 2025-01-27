const SearchSection = ({ getWeatherDeatails, searchInputref }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

    
    // lida com o envio do formulário de pesquisa de cidade //
    const handleCitySearch = (e) => {
      e.preventDefault();
      const searchInput = e.target.querySelector(".search-input");
      const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&
      days=2`;
      getWeatherDeatails(API_URL); // Busca detalhes meteorológicos para a cidade inserida
  };


  // obtém a localização atual do usuário (latitude/ longitude)
  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${longitude},${latitude}&days=2`;
        getWeatherDeatails(API_URL); // busca detalhes meteorológicos para a localização atual do usuário
      },
      () => {
        alert("Location acces denied. Please enable permissions to use this feature.");
      }
    )
  }

  return (
    <div className="search-section">
    <form action="#" className="search-form" onSubmit={handleCitySearch}>
      <span className="bi bi-search"></span>
      <input type="search" placeholder="Enter a city name" ref={searchInputref}
      className="search-input" required />
    </form>
    <button className="location-button" onClick={handleLocationSearch}>
    <span className="bi bi-geo-alt"></span>
    </button>
  </div>
  );
};

export default SearchSection;