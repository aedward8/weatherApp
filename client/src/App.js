import * as React from "react";
import * as apiClient from "./apiClient";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>What is the Weather Currently in this City?</h1>
      <SearchCityState />
    </div>
  );
}

function SearchCityState() {
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    setWeather(await apiClient.getCurrent(query));
    setQuery("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="inputValue"
          placeholder="City Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {typeof weather.main != "undefined" ? (
        <div className="display">
          <h1 className="name"></h1>
          <p className="location">
            Location: {weather.name}, {weather.sys.country}
          </p>
          <p className="desc">
            {" "}
            Description: {weather.weather[0].main},{" "}
            {weather.weather[0].description}
          </p>
          <p className="temp">Temperature: {weather.main.temp} °F</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
