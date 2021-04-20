// API Fetch Calls

//require("dotenv").config();
// CRA automatically reads .ENV files

// secrets to reside on the server side
// proxy
export const getCurrent = async (city_name) => {
  console.log(process.env.REACT_APP_API_key);
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${process.env.REACT_APP_API_key}&units=imperial`
    );
    //converting JSON to JS
    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};
