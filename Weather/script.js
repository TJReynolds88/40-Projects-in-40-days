//Avoid CORS Error
const herokuapp = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.metaweather.com/api/api/location/search/?query=';

//Gets the woeid from Location
async function getWeatherByWoeid(location) {
  const response = await fetch(herokuapp + apiUrl + location);

  const respData = await response.json();

  const woeid = respData[0].woeid;

  getCityData(woeid);
}

// Retrives the city Data from the woeid
async function getCityData(woeid) {
  const woeidApiUrl = "https://www.metaweather.com/api/location/";

  const response = await fetch(herokuapp + woeidApiUrl + woeid + "/");

  const cityData = await response.json();

  addDataToPage(cityData);
}
function addDataToPage(cityData) {
  //Status
  const status = document.getElementById("status");
  statusData = cityData.consolidated_weather[0].weather_state_name;
  status.innerHTML = statusData;

  //Visiblity
  const visibility = document.getElementById("visibility");
  visibilityData = cityData.consolidated_weather[0].visibility;
  visibilityData = parseInt(visibilityData);
  visibility.innerHTML = visibilityData;

  //Wind
  const windspeed = document.getElementById("windspeed");
  windspeedData = cityData.consolidated_weather[0].wind_speed;
  windspeedData = parseInt(windspeedData);
  windspeed.innerHTML = windspeedData;

  //Humidity
  const humidity = document.getElementById("humidity");
  humidity.innerHTML = cityData.consolidated_weather[0].humidity;

  //Temp
  const tempoutside = document.getElementById('temp');
  temp = cityData.consolidated_weather[0].the_temp;
  Ftemp = temp * 9 / 5 + 32;
  Ftemp = parseInt(Ftemp);
  tempoutside.innerHTML = Ftemp;
}






getWeatherByWoeid("London");
