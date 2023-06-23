import CityData from "@/interfaces/city";
import WeatherData from "@/interfaces/weather";
import cities from "@/lib/city.list.json";

let Cities = cities as CityData[];

export async function getCityData(city_id: string) {
  // Find the city by city Id
  const city = Cities.find((city) => city.id.toString() == city_id);
  if (!city) {
    throw new Error("City not found");
  }
  return city;
}

export async function getWeatherData(city: CityData) {
  // Get the weather data of the city
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.WEATHER_API_KEY}&exclude=minutely&units=metric`;
  // Fetch the weather data
  const res = await fetch(url);
  const weatherData: WeatherData = await res.json();
  if (!weatherData) {
    throw new Error("Weather data not found");
  }
  return weatherData;
}
